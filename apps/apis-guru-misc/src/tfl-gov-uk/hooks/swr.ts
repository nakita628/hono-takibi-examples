import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccidentStatsKey() {
  return ['AccidentStats'] as const
}

export function getAirQualityKey() {
  return ['AirQuality'] as const
}

export function getBikePointKey() {
  return ['BikePoint'] as const
}

export function getCabwiseKey() {
  return ['Cabwise'] as const
}

export function getJourneyKey() {
  return ['Journey'] as const
}

export function getLineKey() {
  return ['Line'] as const
}

export function getModeKey() {
  return ['Mode'] as const
}

export function getOccupancyKey() {
  return ['Occupancy'] as const
}

export function getPlaceKey() {
  return ['Place'] as const
}

export function getRoadKey() {
  return ['Road'] as const
}

export function getSearchKey() {
  return ['Search'] as const
}

export function getStopPointKey() {
  return ['StopPoint'] as const
}

export function getTravelTimesKey() {
  return ['TravelTimes'] as const
}

export function getVehicleKey() {
  return ['Vehicle'] as const
}

export function getGetAccidentStatsYearKey(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
) {
  return ['AccidentStats', '/AccidentStats/:year', args] as const
}

export function useGetAccidentStatsYear<TError = unknown>(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccidentStatsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AccidentStats[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccidentStatsYear<TError = unknown>(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccidentStatsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AccidentStats[':year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAirQualityKey() {
  return ['AirQuality', '/AirQuality'] as const
}

export function useGetAirQuality<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAirQualityKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AirQuality.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAirQuality<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAirQualityKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.AirQuality.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBikePointKey() {
  return ['BikePoint', '/BikePoint'] as const
}

export function useGetBikePoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBikePointKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBikePoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBikePointKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBikePointSearchKey(
  args: InferRequestType<typeof client.BikePoint.Search.$get>,
) {
  return ['BikePoint', '/BikePoint/Search', args] as const
}

export function useGetBikePointSearch<TError = unknown>(
  args: InferRequestType<typeof client.BikePoint.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBikePointSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBikePointSearch<TError = unknown>(
  args: InferRequestType<typeof client.BikePoint.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBikePointSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBikePointIdKey(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
) {
  return ['BikePoint', '/BikePoint/:id', args] as const
}

export function useGetBikePointId<TError = unknown>(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBikePointIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBikePointId<TError = unknown>(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBikePointIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.BikePoint[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCabwiseSearchKey(args: InferRequestType<typeof client.Cabwise.search.$get>) {
  return ['Cabwise', '/Cabwise/search', args] as const
}

export function useGetCabwiseSearch<TError = unknown>(
  args: InferRequestType<typeof client.Cabwise.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCabwiseSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Cabwise.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCabwiseSearch<TError = unknown>(
  args: InferRequestType<typeof client.Cabwise.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCabwiseSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Cabwise.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJourneyJourneyResultsFromToToKey(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
) {
  return ['Journey', '/Journey/JourneyResults/:from/to/:to', args] as const
}

export function useGetJourneyJourneyResultsFromToTo<TError = unknown>(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJourneyJourneyResultsFromToToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Journey.JourneyResults[':from'].to[':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJourneyJourneyResultsFromToTo<TError = unknown>(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJourneyJourneyResultsFromToToKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Journey.JourneyResults[':from'].to[':to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJourneyMetaModesKey() {
  return ['Journey', '/Journey/Meta/Modes'] as const
}

export function useGetJourneyMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJourneyMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journey.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJourneyMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJourneyMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Journey.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineMetaDisruptionCategoriesKey() {
  return ['Line', '/Line/Meta/DisruptionCategories'] as const
}

export function useGetLineMetaDisruptionCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineMetaDisruptionCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line.Meta.DisruptionCategories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineMetaDisruptionCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineMetaDisruptionCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line.Meta.DisruptionCategories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineMetaModesKey() {
  return ['Line', '/Line/Meta/Modes'] as const
}

export function useGetLineMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineMetaServiceTypesKey() {
  return ['Line', '/Line/Meta/ServiceTypes'] as const
}

export function useGetLineMetaServiceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineMetaServiceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.ServiceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineMetaServiceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineMetaServiceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.ServiceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineMetaSeverityKey() {
  return ['Line', '/Line/Meta/Severity'] as const
}

export function useGetLineMetaSeverity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineMetaSeverityKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.Severity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineMetaSeverity<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineMetaSeverityKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Meta.Severity.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineModeModesKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes', args] as const
}

export function useGetLineModeModes<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineModeModesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineModeModes<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineModeModesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineModeModesDisruptionKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Disruption', args] as const
}

export function useGetLineModeModesDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineModeModesDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineModeModesRouteKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Route', args] as const
}

export function useGetLineModeModesRoute<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineModeModesRoute<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineModeModesStatusKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Status', args] as const
}

export function useGetLineModeModesStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineModeModesStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineModeModesStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Mode[':modes'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineRouteKey(args: InferRequestType<typeof client.Line.Route.$get>) {
  return ['Line', '/Line/Route', args] as const
}

export function useGetLineRoute<TError = unknown>(
  args: InferRequestType<typeof client.Line.Route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineRoute<TError = unknown>(
  args: InferRequestType<typeof client.Line.Route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineSearchQueryKey(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
) {
  return ['Line', '/Line/Search/:query', args] as const
}

export function useGetLineSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineStatusSeverityKey(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
) {
  return ['Line', '/Line/Status/:severity', args] as const
}

export function useGetLineStatusSeverity<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineStatusSeverityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Status[':severity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineStatusSeverity<TError = unknown>(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineStatusSeverityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line.Status[':severity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsKey(args: InferRequestType<(typeof client.Line)[':ids']['$get']>) {
  return ['Line', '/Line/:ids', args] as const
}

export function useGetLineIds<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIds<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsArrivalsStopPointIdKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
) {
  return ['Line', '/Line/:ids/Arrivals/:stopPointId', args] as const
}

export function useGetLineIdsArrivalsStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdsArrivalsStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':ids'].Arrivals[':stopPointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdsArrivalsStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdsArrivalsStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':ids'].Arrivals[':stopPointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsDisruptionKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
) {
  return ['Line', '/Line/:ids/Disruption', args] as const
}

export function useGetLineIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsRouteKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
) {
  return ['Line', '/Line/:ids/Route', args] as const
}

export function useGetLineIdsRoute<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdsRoute<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsStatusKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
) {
  return ['Line', '/Line/:ids/Status', args] as const
}

export function useGetLineIdsStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdsStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLineIdsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':ids'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdsStatusStartDateToEndDateKey(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
) {
  return ['Line', '/Line/:ids/Status/:StartDate/to/:EndDate', args] as const
}

export function useGetLineIdsStatusStartDateToEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
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
        ? getGetLineIdsStatusStartDateToEndDateKey(args)
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
                (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
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
          client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdsStatusStartDateToEndDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
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
        ? getGetLineIdsStatusStartDateToEndDateKey(args)
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
                (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
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
          client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdRouteSequenceDirectionKey(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
) {
  return ['Line', '/Line/:id/Route/Sequence/:direction', args] as const
}

export function useGetLineIdRouteSequenceDirection<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdRouteSequenceDirectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':id'].Route.Sequence[':direction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdRouteSequenceDirection<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdRouteSequenceDirectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':id'].Route.Sequence[':direction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdStopPointsKey(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
) {
  return ['Line', '/Line/:id/StopPoints', args] as const
}

export function useGetLineIdStopPoints<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdStopPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':id'].StopPoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdStopPoints<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdStopPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Line[':id'].StopPoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdTimetableFromStopPointIdKey(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId', args] as const
}

export function useGetLineIdTimetableFromStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdTimetableFromStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':id'].Timetable[':fromStopPointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdTimetableFromStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLineIdTimetableFromStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Line[':id'].Timetable[':fromStopPointId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLineIdTimetableFromStopPointIdToToStopPointIdKey(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId/to/:toStopPointId', args] as const
}

export function useGetLineIdTimetableFromStopPointIdToToStopPointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
        ? getGetLineIdTimetableFromStopPointIdToToStopPointIdKey(args)
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
                (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
          client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLineIdTimetableFromStopPointIdToToStopPointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
        ? getGetLineIdTimetableFromStopPointIdToToStopPointIdKey(args)
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
                (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
          client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetModeActiveServiceTypesKey() {
  return ['Mode', '/Mode/ActiveServiceTypes'] as const
}

export function useGetModeActiveServiceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModeActiveServiceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Mode.ActiveServiceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModeActiveServiceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModeActiveServiceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Mode.ActiveServiceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModeModeArrivalsKey(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
) {
  return ['Mode', '/Mode/:mode/Arrivals', args] as const
}

export function useGetModeModeArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModeModeArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Mode[':mode'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModeModeArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModeModeArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Mode[':mode'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupancyBikePointsIdsKey(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
) {
  return ['Occupancy', '/Occupancy/BikePoints/:ids', args] as const
}

export function useGetOccupancyBikePointsIds<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyBikePointsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.BikePoints[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupancyBikePointsIds<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyBikePointsIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.BikePoints[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupancyCarParkKey() {
  return ['Occupancy', '/Occupancy/CarPark'] as const
}

export function useGetOccupancyCarPark<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOccupancyCarParkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.CarPark.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupancyCarPark<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOccupancyCarParkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.CarPark.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupancyCarParkIdKey(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
) {
  return ['Occupancy', '/Occupancy/CarPark/:id', args] as const
}

export function useGetOccupancyCarParkId<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyCarParkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.CarPark[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupancyCarParkId<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyCarParkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.CarPark[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupancyChargeConnectorKey() {
  return ['Occupancy', '/Occupancy/ChargeConnector'] as const
}

export function useGetOccupancyChargeConnector<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyChargeConnectorKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.ChargeConnector.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupancyChargeConnector<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyChargeConnectorKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.ChargeConnector.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupancyChargeConnectorIdsKey(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
) {
  return ['Occupancy', '/Occupancy/ChargeConnector/:ids', args] as const
}

export function useGetOccupancyChargeConnectorIds<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyChargeConnectorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.ChargeConnector[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupancyChargeConnectorIds<TError = unknown>(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupancyChargeConnectorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Occupancy.ChargeConnector[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceKey(args: InferRequestType<typeof client.Place.$get>) {
  return ['Place', '/Place', args] as const
}

export function useGetPlace<TError = unknown>(
  args: InferRequestType<typeof client.Place.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Place.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlace<TError = unknown>(
  args: InferRequestType<typeof client.Place.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Place.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlaceAddressStreetsPostcodeKey(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
) {
  return ['Place', '/Place/Address/Streets/:Postcode', args] as const
}

export function useGetPlaceAddressStreetsPostcode<TError = unknown>(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceAddressStreetsPostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Place.Address.Streets[':Postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceAddressStreetsPostcode<TError = unknown>(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceAddressStreetsPostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Place.Address.Streets[':Postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceMetaCategoriesKey() {
  return ['Place', '/Place/Meta/Categories'] as const
}

export function useGetPlaceMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceMetaPlaceTypesKey() {
  return ['Place', '/Place/Meta/PlaceTypes'] as const
}

export function useGetPlaceMetaPlaceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceMetaPlaceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Meta.PlaceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceMetaPlaceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceMetaPlaceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Meta.PlaceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceSearchKey(args: InferRequestType<typeof client.Place.Search.$get>) {
  return ['Place', '/Place/Search', args] as const
}

export function useGetPlaceSearch<TError = unknown>(
  args: InferRequestType<typeof client.Place.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceSearch<TError = unknown>(
  args: InferRequestType<typeof client.Place.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceTypeTypesKey(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
) {
  return ['Place', '/Place/Type/:types', args] as const
}

export function useGetPlaceTypeTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceTypeTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Type[':types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceTypeTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceTypeTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place.Type[':types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceIdKey(args: InferRequestType<(typeof client.Place)[':id']['$get']>) {
  return ['Place', '/Place/:id', args] as const
}

export function useGetPlaceId<TError = unknown>(
  args: InferRequestType<(typeof client.Place)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceId<TError = unknown>(
  args: InferRequestType<(typeof client.Place)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceTypeAtLatLonKey(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
) {
  return ['Place', '/Place/:type/At/:Lat/:Lon', args] as const
}

export function useGetPlaceTypeAtLatLon<TError = unknown>(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceTypeAtLatLonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place[':type'].At[':Lat'][':Lon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceTypeAtLatLon<TError = unknown>(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaceTypeAtLatLonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Place[':type'].At[':Lat'][':Lon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaceTypeOverlayZLatLonWidthHeightKey(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
) {
  return ['Place', '/Place/:type/overlay/:z/:Lat/:Lon/:width/:height', args] as const
}

export function useGetPlaceTypeOverlayZLatLonWidthHeight<TError = unknown>(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
        ? getGetPlaceTypeOverlayZLatLonWidthHeightKey(args)
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
                (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
          client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaceTypeOverlayZLatLonWidthHeight<TError = unknown>(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
        ? getGetPlaceTypeOverlayZLatLonWidthHeightKey(args)
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
                (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
          client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRoadKey() {
  return ['Road', '/Road'] as const
}

export function useGetRoad<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRoadKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoad<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRoadKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadMetaCategoriesKey() {
  return ['Road', '/Road/Meta/Categories'] as const
}

export function useGetRoadMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadMetaCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadMetaCategoriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadMetaSeveritiesKey() {
  return ['Road', '/Road/Meta/Severities'] as const
}

export function useGetRoadMetaSeverities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadMetaSeveritiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.Meta.Severities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadMetaSeverities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadMetaSeveritiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.Meta.Severities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadAllDisruptionDisruptionIdsKey(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
) {
  return ['Road', '/Road/all/Disruption/:disruptionIds', args] as const
}

export function useGetRoadAllDisruptionDisruptionIds<TError = unknown>(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadAllDisruptionDisruptionIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Road.all.Disruption[':disruptionIds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadAllDisruptionDisruptionIds<TError = unknown>(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadAllDisruptionDisruptionIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Road.all.Disruption[':disruptionIds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadAllStreetDisruptionKey(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
) {
  return ['Road', '/Road/all/Street/Disruption', args] as const
}

export function useGetRoadAllStreetDisruption<TError = unknown>(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadAllStreetDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.all.Street.Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadAllStreetDisruption<TError = unknown>(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadAllStreetDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road.all.Street.Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadIdsKey(args: InferRequestType<(typeof client.Road)[':ids']['$get']>) {
  return ['Road', '/Road/:ids', args] as const
}

export function useGetRoadIds<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadIds<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadIdsDisruptionKey(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
) {
  return ['Road', '/Road/:ids/Disruption', args] as const
}

export function useGetRoadIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoadIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoadIdsStatusKey(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
) {
  return ['Road', '/Road/:ids/Status', args] as const
}

export function useGetRoadIdsStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadIdsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoadIdsStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoadIdsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Road[':ids'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.Search.$get>) {
  return ['Search', '/Search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSearchBusSchedulesKey(
  args: InferRequestType<typeof client.Search.BusSchedules.$get>,
) {
  return ['Search', '/Search/BusSchedules', args] as const
}

export function useGetSearchBusSchedules<TError = unknown>(
  args: InferRequestType<typeof client.Search.BusSchedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchBusSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.BusSchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchBusSchedules<TError = unknown>(
  args: InferRequestType<typeof client.Search.BusSchedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchBusSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.BusSchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMetaCategoriesKey() {
  return ['Search', '/Search/Meta/Categories'] as const
}

export function useGetSearchMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMetaSearchProvidersKey() {
  return ['Search', '/Search/Meta/SearchProviders'] as const
}

export function useGetSearchMetaSearchProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMetaSearchProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.SearchProviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMetaSearchProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMetaSearchProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.SearchProviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMetaSortsKey() {
  return ['Search', '/Search/Meta/Sorts'] as const
}

export function useGetSearchMetaSorts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchMetaSortsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.Sorts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMetaSorts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchMetaSortsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Search.Meta.Sorts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointKey(args: InferRequestType<typeof client.StopPoint.$get>) {
  return ['StopPoint', '/StopPoint', args] as const
}

export function useGetStopPoint<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPoint<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointMetaCategoriesKey() {
  return ['StopPoint', '/StopPoint/Meta/Categories'] as const
}

export function useGetStopPointMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointMetaCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointMetaCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.Categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointMetaModesKey() {
  return ['StopPoint', '/StopPoint/Meta/Modes'] as const
}

export function useGetStopPointMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointMetaModes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointMetaModesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.Modes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointMetaStopTypesKey() {
  return ['StopPoint', '/StopPoint/Meta/StopTypes'] as const
}

export function useGetStopPointMetaStopTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointMetaStopTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.StopTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointMetaStopTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointMetaStopTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Meta.StopTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointModeModesKey(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes', args] as const
}

export function useGetStopPointModeModes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointModeModesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Mode[':modes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointModeModes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointModeModesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Mode[':modes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointModeModesDisruptionKey(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes/Disruption', args] as const
}

export function useGetStopPointModeModesDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointModeModesDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint.Mode[':modes'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointModeModesDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointModeModesDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint.Mode[':modes'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointSearchKey(
  args: InferRequestType<typeof client.StopPoint.Search.$get>,
) {
  return ['StopPoint', '/StopPoint/Search', args] as const
}

export function useGetStopPointSearch<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointSearch<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointSearchQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Search/:query', args] as const
}

export function useGetStopPointSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Search[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointServiceTypesKey(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
) {
  return ['StopPoint', '/StopPoint/ServiceTypes', args] as const
}

export function useGetStopPointServiceTypes<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointServiceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.ServiceTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointServiceTypes<TError = unknown>(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointServiceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.ServiceTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointSmsIdKey(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Sms/:id', args] as const
}

export function useGetStopPointSmsId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointSmsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Sms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointSmsId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointSmsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Sms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointTypeTypesKey(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Type/:types', args] as const
}

export function useGetStopPointTypeTypes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointTypeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Type[':types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointTypeTypes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointTypeTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint.Type[':types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointTypeTypesPagePageKey(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Type/:types/page/:page', args] as const
}

export function useGetStopPointTypeTypesPagePage<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointTypeTypesPagePageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint.Type[':types'].page[':page'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointTypeTypesPagePage<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointTypeTypesPagePageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint.Type[':types'].page[':page'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdsKey(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:ids', args] as const
}

export function useGetStopPointIds<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIds<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopPointIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':ids'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdsDisruptionKey(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:ids/Disruption', args] as const
}

export function useGetStopPointIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdsDisruption<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdsDisruptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':ids'].Disruption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdArrivalDeparturesKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/ArrivalDepartures', args] as const
}

export function useGetStopPointIdArrivalDepartures<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdArrivalDeparturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].ArrivalDepartures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdArrivalDepartures<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdArrivalDeparturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].ArrivalDepartures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdArrivalsKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Arrivals', args] as const
}

export function useGetStopPointIdArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdCanReachOnLineLineIdKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/CanReachOnLine/:lineId', args] as const
}

export function useGetStopPointIdCanReachOnLineLineId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdCanReachOnLineLineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdCanReachOnLineLineId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdCanReachOnLineLineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdCrowdingLineKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Crowding/:line', args] as const
}

export function useGetStopPointIdCrowdingLine<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdCrowdingLineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].Crowding[':line'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdCrowdingLine<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdCrowdingLineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':id'].Crowding[':line'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdDirectionToToStopPointIdKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/DirectionTo/:toStopPointId', args] as const
}

export function useGetStopPointIdDirectionToToStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdDirectionToToStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdDirectionToToStopPointId<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdDirectionToToStopPointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdRouteKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Route', args] as const
}

export function useGetStopPointIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].Route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointIdPlaceTypesKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/placeTypes', args] as const
}

export function useGetStopPointIdPlaceTypes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdPlaceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].placeTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointIdPlaceTypes<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointIdPlaceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.StopPoint[':id'].placeTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointStopPointIdCarParksKey(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/CarParks', args] as const
}

export function useGetStopPointStopPointIdCarParks<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointStopPointIdCarParksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':stopPointId'].CarParks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointStopPointIdCarParks<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointStopPointIdCarParksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':stopPointId'].CarParks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopPointStopPointIdTaxiRanksKey(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/TaxiRanks', args] as const
}

export function useGetStopPointStopPointIdTaxiRanks<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointStopPointIdTaxiRanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':stopPointId'].TaxiRanks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopPointStopPointIdTaxiRanks<TError = unknown>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStopPointStopPointIdTaxiRanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.StopPoint[':stopPointId'].TaxiRanks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
  args: InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
) {
  return [
    'TravelTimes',
    '/TravelTimes/compareOverlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height',
    args,
  ] as const
}

export function useGetTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
        ? getGetTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
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
                (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
          client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][
            ':mapCenterLon'
          ].pinlocation[':pinLat'][':pinLon'].dimensions[':width'][':height'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
        ? getGetTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
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
                (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
          client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][
            ':mapCenterLon'
          ].pinlocation[':pinLat'][':pinLon'].dimensions[':width'][':height'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
  args: InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
) {
  return [
    'TravelTimes',
    '/TravelTimes/overlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height',
    args,
  ] as const
}

export function useGetTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
        ? getGetTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
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
                (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
          client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
            ':pinLat'
          ][':pinLon'].dimensions[':width'][':height'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
        ? getGetTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightKey(
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
                (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
          client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
            ':pinLat'
          ][':pinLon'].dimensions[':width'][':height'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVehicleIdsArrivalsKey(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
) {
  return ['Vehicle', '/Vehicle/:ids/Arrivals', args] as const
}

export function useGetVehicleIdsArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehicleIdsArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Vehicle[':ids'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehicleIdsArrivals<TError = unknown>(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehicleIdsArrivalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Vehicle[':ids'].Arrivals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
