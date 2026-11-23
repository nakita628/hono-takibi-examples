import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getAccidentStatsYearQueryKey(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
) {
  return ['AccidentStats', '/AccidentStats/:year', args] as const
}

export function getAccidentStatsYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccidentStatsYearQueryKey>
  >({
    queryKey: getAccidentStatsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.AccidentStats[':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccidentStatsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccidentStatsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccidentStatsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAirQualityQueryKey() {
  return ['AirQuality', '/AirQuality'] as const
}

export function getAirQualityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAirQualityQueryKey>
  >({
    queryKey: getAirQualityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.AirQuality.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAirQualityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAirQualityQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBikePointQueryKey() {
  return ['BikePoint', '/BikePoint'] as const
}

export function getBikePointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBikePointQueryKey>
  >({
    queryKey: getBikePointQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.BikePoint.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBikePoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBikePointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBikePointQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBikePointSearchQueryKey(
  args: InferRequestType<typeof client.BikePoint.Search.$get>,
) {
  return ['BikePoint', '/BikePoint/Search', args] as const
}

export function getBikePointSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.BikePoint.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBikePointSearchQueryKey>
  >({
    queryKey: getBikePointSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BikePoint.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBikePointSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.BikePoint.Search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBikePointSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBikePointSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBikePointIdQueryKey(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
) {
  return ['BikePoint', '/BikePoint/:id', args] as const
}

export function getBikePointIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBikePointIdQueryKey>
  >({
    queryKey: getBikePointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.BikePoint[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBikePointId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBikePointIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBikePointIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCabwiseSearchQueryKey(
  args: InferRequestType<typeof client.Cabwise.search.$get>,
) {
  return ['Cabwise', '/Cabwise/search', args] as const
}

export function getCabwiseSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Cabwise.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCabwiseSearchQueryKey>
  >({
    queryKey: getCabwiseSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Cabwise.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCabwiseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Cabwise.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCabwiseSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCabwiseSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJourneyJourneyResultsFromToToQueryKey(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
) {
  return ['Journey', '/Journey/JourneyResults/:from/to/:to', args] as const
}

export function getJourneyJourneyResultsFromToToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJourneyJourneyResultsFromToToQueryKey>
  >({
    queryKey: getJourneyJourneyResultsFromToToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Journey.JourneyResults[':from'].to[':to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJourneyJourneyResultsFromToTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJourneyJourneyResultsFromToToQueryKey>
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
      ...getJourneyJourneyResultsFromToToQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getJourneyMetaModesQueryKey() {
  return ['Journey', '/Journey/Meta/Modes'] as const
}

export function getJourneyMetaModesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJourneyMetaModesQueryKey>
  >({
    queryKey: getJourneyMetaModesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Journey.Meta.Modes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJourneyMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJourneyMetaModesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJourneyMetaModesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLineMetaDisruptionCategoriesQueryKey() {
  return ['Line', '/Line/Meta/DisruptionCategories'] as const
}

export function getLineMetaDisruptionCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaDisruptionCategoriesQueryKey>
  >({
    queryKey: getLineMetaDisruptionCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Meta.DisruptionCategories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineMetaDisruptionCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineMetaDisruptionCategoriesQueryKey>
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
      ...getLineMetaDisruptionCategoriesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineMetaModesQueryKey() {
  return ['Line', '/Line/Meta/Modes'] as const
}

export function getLineMetaModesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaModesQueryKey>
  >({
    queryKey: getLineMetaModesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Meta.Modes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLineMetaModesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineMetaModesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLineMetaServiceTypesQueryKey() {
  return ['Line', '/Line/Meta/ServiceTypes'] as const
}

export function getLineMetaServiceTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaServiceTypesQueryKey>
  >({
    queryKey: getLineMetaServiceTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Meta.ServiceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineMetaServiceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineMetaServiceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineMetaServiceTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLineMetaSeverityQueryKey() {
  return ['Line', '/Line/Meta/Severity'] as const
}

export function getLineMetaSeverityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaSeverityQueryKey>
  >({
    queryKey: getLineMetaSeverityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Meta.Severity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineMetaSeverity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineMetaSeverityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineMetaSeverityQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLineModeModesQueryKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes', args] as const
}

export function getLineModeModesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesQueryKey>
  >({
    queryKey: getLineModeModesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Mode[':modes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineModeModes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineModeModesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineModeModesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineModeModesDisruptionQueryKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Disruption', args] as const
}

export function getLineModeModesDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesDisruptionQueryKey>
  >({
    queryKey: getLineModeModesDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Mode[':modes'].Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineModeModesDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineModeModesDisruptionQueryKey>
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
      ...getLineModeModesDisruptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineModeModesRouteQueryKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Route', args] as const
}

export function getLineModeModesRouteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesRouteQueryKey>
  >({
    queryKey: getLineModeModesRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Mode[':modes'].Route.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineModeModesRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineModeModesRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineModeModesRouteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineModeModesStatusQueryKey(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
) {
  return ['Line', '/Line/Mode/:modes/Status', args] as const
}

export function getLineModeModesStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesStatusQueryKey>
  >({
    queryKey: getLineModeModesStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Mode[':modes'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineModeModesStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineModeModesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineModeModesStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineRouteQueryKey(args: InferRequestType<typeof client.Line.Route.$get>) {
  return ['Line', '/Line/Route', args] as const
}

export function getLineRouteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Line.Route.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLineRouteQueryKey>
  >({
    queryKey: getLineRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Route.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineRoute<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Line.Route.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLineRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineRouteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineSearchQueryQueryKey(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
) {
  return ['Line', '/Line/Search/:query', args] as const
}

export function getLineSearchQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineSearchQueryQueryKey>
  >({
    queryKey: getLineSearchQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Search[':query'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineSearchQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineSearchQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineStatusSeverityQueryKey(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
) {
  return ['Line', '/Line/Status/:severity', args] as const
}

export function getLineStatusSeverityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineStatusSeverityQueryKey>
  >({
    queryKey: getLineStatusSeverityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line.Status[':severity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineStatusSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineStatusSeverityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineStatusSeverityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdsQueryKey(args: InferRequestType<(typeof client.Line)[':ids']['$get']>) {
  return ['Line', '/Line/:ids', args] as const
}

export function getLineIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Line)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsQueryKey>
  >({
    queryKey: getLineIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdsArrivalsStopPointIdQueryKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
) {
  return ['Line', '/Line/:ids/Arrivals/:stopPointId', args] as const
}

export function getLineIdsArrivalsStopPointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsArrivalsStopPointIdQueryKey>
  >({
    queryKey: getLineIdsArrivalsStopPointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].Arrivals[':stopPointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdsArrivalsStopPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdsArrivalsStopPointIdQueryKey>
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
      ...getLineIdsArrivalsStopPointIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineIdsDisruptionQueryKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
) {
  return ['Line', '/Line/:ids/Disruption', args] as const
}

export function getLineIdsDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsDisruptionQueryKey>
  >({
    queryKey: getLineIdsDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdsDisruptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineIdsDisruptionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdsRouteQueryKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
) {
  return ['Line', '/Line/:ids/Route', args] as const
}

export function getLineIdsRouteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsRouteQueryKey>
  >({
    queryKey: getLineIdsRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].Route.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineIdsRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdsRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineIdsRouteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdsStatusQueryKey(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
) {
  return ['Line', '/Line/:ids/Status', args] as const
}

export function getLineIdsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsStatusQueryKey>
  >({
    queryKey: getLineIdsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].Status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLineIdsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineIdsStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdsStatusStartDateToEndDateQueryKey(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
) {
  return ['Line', '/Line/:ids/Status/:StartDate/to/:EndDate', args] as const
}

export function getLineIdsStatusStartDateToEndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLineIdsStatusStartDateToEndDateQueryKey>
  >({
    queryKey: getLineIdsStatusStartDateToEndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdsStatusStartDateToEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLineIdsStatusStartDateToEndDateQueryKey>
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
      ...getLineIdsStatusStartDateToEndDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineIdRouteSequenceDirectionQueryKey(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
) {
  return ['Line', '/Line/:id/Route/Sequence/:direction', args] as const
}

export function getLineIdRouteSequenceDirectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdRouteSequenceDirectionQueryKey>
  >({
    queryKey: getLineIdRouteSequenceDirectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':id'].Route.Sequence[':direction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdRouteSequenceDirection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdRouteSequenceDirectionQueryKey>
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
      ...getLineIdRouteSequenceDirectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineIdStopPointsQueryKey(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
) {
  return ['Line', '/Line/:id/StopPoints', args] as const
}

export function getLineIdStopPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdStopPointsQueryKey>
  >({
    queryKey: getLineIdStopPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':id'].StopPoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdStopPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdStopPointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLineIdStopPointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLineIdTimetableFromStopPointIdQueryKey(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId', args] as const
}

export function getLineIdTimetableFromStopPointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdTimetableFromStopPointIdQueryKey>
  >({
    queryKey: getLineIdTimetableFromStopPointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':id'].Timetable[':fromStopPointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdTimetableFromStopPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLineIdTimetableFromStopPointIdQueryKey>
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
      ...getLineIdTimetableFromStopPointIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId/to/:toStopPointId', args] as const
}

export function getLineIdTimetableFromStopPointIdToToStopPointIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey>
  >({
    queryKey: getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLineIdTimetableFromStopPointIdToToStopPointId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey>
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
      ...getLineIdTimetableFromStopPointIdToToStopPointIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getModeActiveServiceTypesQueryKey() {
  return ['Mode', '/Mode/ActiveServiceTypes'] as const
}

export function getModeActiveServiceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModeActiveServiceTypesQueryKey>
  >({
    queryKey: getModeActiveServiceTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Mode.ActiveServiceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModeActiveServiceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModeActiveServiceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModeActiveServiceTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getModeModeArrivalsQueryKey(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
) {
  return ['Mode', '/Mode/:mode/Arrivals', args] as const
}

export function getModeModeArrivalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModeModeArrivalsQueryKey>
  >({
    queryKey: getModeModeArrivalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Mode[':mode'].Arrivals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModeModeArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModeModeArrivalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModeModeArrivalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOccupancyBikePointsIdsQueryKey(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
) {
  return ['Occupancy', '/Occupancy/BikePoints/:ids', args] as const
}

export function getOccupancyBikePointsIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyBikePointsIdsQueryKey>
  >({
    queryKey: getOccupancyBikePointsIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Occupancy.BikePoints[':ids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOccupancyBikePointsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupancyBikePointsIdsQueryKey>
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
      ...getOccupancyBikePointsIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOccupancyCarParkQueryKey() {
  return ['Occupancy', '/Occupancy/CarPark'] as const
}

export function getOccupancyCarParkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyCarParkQueryKey>
  >({
    queryKey: getOccupancyCarParkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Occupancy.CarPark.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOccupancyCarPark<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupancyCarParkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOccupancyCarParkQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOccupancyCarParkIdQueryKey(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
) {
  return ['Occupancy', '/Occupancy/CarPark/:id', args] as const
}

export function getOccupancyCarParkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyCarParkIdQueryKey>
  >({
    queryKey: getOccupancyCarParkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Occupancy.CarPark[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOccupancyCarParkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupancyCarParkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOccupancyCarParkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOccupancyChargeConnectorQueryKey() {
  return ['Occupancy', '/Occupancy/ChargeConnector'] as const
}

export function getOccupancyChargeConnectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyChargeConnectorQueryKey>
  >({
    queryKey: getOccupancyChargeConnectorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Occupancy.ChargeConnector.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOccupancyChargeConnector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupancyChargeConnectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOccupancyChargeConnectorQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOccupancyChargeConnectorIdsQueryKey(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
) {
  return ['Occupancy', '/Occupancy/ChargeConnector/:ids', args] as const
}

export function getOccupancyChargeConnectorIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyChargeConnectorIdsQueryKey>
  >({
    queryKey: getOccupancyChargeConnectorIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Occupancy.ChargeConnector[':ids'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOccupancyChargeConnectorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupancyChargeConnectorIdsQueryKey>
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
      ...getOccupancyChargeConnectorIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPlaceQueryKey(args: InferRequestType<typeof client.Place.$get>) {
  return ['Place', '/Place', args] as const
}

export function getPlaceQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Place.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaceQueryKey>
  >({
    queryKey: getPlaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlace<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Place.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlaceAddressStreetsPostcodeQueryKey(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
) {
  return ['Place', '/Place/Address/Streets/:Postcode', args] as const
}

export function getPlaceAddressStreetsPostcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceAddressStreetsPostcodeQueryKey>
  >({
    queryKey: getPlaceAddressStreetsPostcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.Address.Streets[':Postcode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaceAddressStreetsPostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceAddressStreetsPostcodeQueryKey>
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
      ...getPlaceAddressStreetsPostcodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPlaceMetaCategoriesQueryKey() {
  return ['Place', '/Place/Meta/Categories'] as const
}

export function getPlaceMetaCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceMetaCategoriesQueryKey>
  >({
    queryKey: getPlaceMetaCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaceMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceMetaCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceMetaCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPlaceMetaPlaceTypesQueryKey() {
  return ['Place', '/Place/Meta/PlaceTypes'] as const
}

export function getPlaceMetaPlaceTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceMetaPlaceTypesQueryKey>
  >({
    queryKey: getPlaceMetaPlaceTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.Meta.PlaceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaceMetaPlaceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceMetaPlaceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceMetaPlaceTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPlaceSearchQueryKey(args: InferRequestType<typeof client.Place.Search.$get>) {
  return ['Place', '/Place/Search', args] as const
}

export function getPlaceSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Place.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaceSearchQueryKey>
  >({
    queryKey: getPlaceSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlaceSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Place.Search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlaceTypeTypesQueryKey(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
) {
  return ['Place', '/Place/Type/:types', args] as const
}

export function getPlaceTypeTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceTypeTypesQueryKey>
  >({
    queryKey: getPlaceTypeTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place.Type[':types'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlaceTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceTypeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceTypeTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlaceIdQueryKey(args: InferRequestType<(typeof client.Place)[':id']['$get']>) {
  return ['Place', '/Place/:id', args] as const
}

export function getPlaceIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Place)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceIdQueryKey>
  >({
    queryKey: getPlaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlaceId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Place)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlaceTypeAtLatLonQueryKey(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
) {
  return ['Place', '/Place/:type/At/:Lat/:Lon', args] as const
}

export function getPlaceTypeAtLatLonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceTypeAtLatLonQueryKey>
  >({
    queryKey: getPlaceTypeAtLatLonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place[':type'].At[':Lat'][':Lon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaceTypeAtLatLon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaceTypeAtLatLonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaceTypeAtLatLonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlaceTypeOverlayZLatLonWidthHeightQueryKey(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
) {
  return ['Place', '/Place/:type/overlay/:z/:Lat/:Lon/:width/:height', args] as const
}

export function getPlaceTypeOverlayZLatLonWidthHeightQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPlaceTypeOverlayZLatLonWidthHeightQueryKey>
  >({
    queryKey: getPlaceTypeOverlayZLatLonWidthHeightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlaceTypeOverlayZLatLonWidthHeight<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPlaceTypeOverlayZLatLonWidthHeightQueryKey>
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
      ...getPlaceTypeOverlayZLatLonWidthHeightQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRoadQueryKey() {
  return ['Road', '/Road'] as const
}

export function getRoadQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoadQueryKey>
  >({
    queryKey: getRoadQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Road.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoad<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRoadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRoadMetaCategoriesQueryKey() {
  return ['Road', '/Road/Meta/Categories'] as const
}

export function getRoadMetaCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadMetaCategoriesQueryKey>
  >({
    queryKey: getRoadMetaCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Road.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoadMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadMetaCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadMetaCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRoadMetaSeveritiesQueryKey() {
  return ['Road', '/Road/Meta/Severities'] as const
}

export function getRoadMetaSeveritiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadMetaSeveritiesQueryKey>
  >({
    queryKey: getRoadMetaSeveritiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Road.Meta.Severities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoadMetaSeverities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadMetaSeveritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadMetaSeveritiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRoadAllDisruptionDisruptionIdsQueryKey(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
) {
  return ['Road', '/Road/all/Disruption/:disruptionIds', args] as const
}

export function getRoadAllDisruptionDisruptionIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadAllDisruptionDisruptionIdsQueryKey>
  >({
    queryKey: getRoadAllDisruptionDisruptionIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Road.all.Disruption[':disruptionIds'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoadAllDisruptionDisruptionIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadAllDisruptionDisruptionIdsQueryKey>
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
      ...getRoadAllDisruptionDisruptionIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRoadAllStreetDisruptionQueryKey(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
) {
  return ['Road', '/Road/all/Street/Disruption', args] as const
}

export function getRoadAllStreetDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadAllStreetDisruptionQueryKey>
  >({
    queryKey: getRoadAllStreetDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Road.all.Street.Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoadAllStreetDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadAllStreetDisruptionQueryKey>
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
      ...getRoadAllStreetDisruptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRoadIdsQueryKey(args: InferRequestType<(typeof client.Road)[':ids']['$get']>) {
  return ['Road', '/Road/:ids', args] as const
}

export function getRoadIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Road)[':ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsQueryKey>
  >({
    queryKey: getRoadIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Road[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoadIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Road)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRoadIdsDisruptionQueryKey(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
) {
  return ['Road', '/Road/:ids/Disruption', args] as const
}

export function getRoadIdsDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsDisruptionQueryKey>
  >({
    queryKey: getRoadIdsDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Road[':ids'].Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoadIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadIdsDisruptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadIdsDisruptionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRoadIdsStatusQueryKey(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
) {
  return ['Road', '/Road/:ids/Status', args] as const
}

export function getRoadIdsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsStatusQueryKey>
  >({
    queryKey: getRoadIdsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Road[':ids'].Status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoadIdsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoadIdsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoadIdsStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.Search.$get>) {
  return ['Search', '/Search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchBusSchedulesQueryKey(
  args: InferRequestType<typeof client.Search.BusSchedules.$get>,
) {
  return ['Search', '/Search/BusSchedules', args] as const
}

export function getSearchBusSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Search.BusSchedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchBusSchedulesQueryKey>
  >({
    queryKey: getSearchBusSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.BusSchedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchBusSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Search.BusSchedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchBusSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchBusSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchMetaCategoriesQueryKey() {
  return ['Search', '/Search/Meta/Categories'] as const
}

export function getSearchMetaCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaCategoriesQueryKey>
  >({
    queryKey: getSearchMetaCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMetaCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchMetaCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSearchMetaSearchProvidersQueryKey() {
  return ['Search', '/Search/Meta/SearchProviders'] as const
}

export function getSearchMetaSearchProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaSearchProvidersQueryKey>
  >({
    queryKey: getSearchMetaSearchProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.Meta.SearchProviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchMetaSearchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMetaSearchProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchMetaSearchProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSearchMetaSortsQueryKey() {
  return ['Search', '/Search/Meta/Sorts'] as const
}

export function getSearchMetaSortsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaSortsQueryKey>
  >({
    queryKey: getSearchMetaSortsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Search.Meta.Sorts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchMetaSorts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMetaSortsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchMetaSortsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStopPointQueryKey(args: InferRequestType<typeof client.StopPoint.$get>) {
  return ['StopPoint', '/StopPoint', args] as const
}

export function getStopPointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.StopPoint.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStopPointQueryKey>
  >({
    queryKey: getStopPointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStopPoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.StopPoint.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointMetaCategoriesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/Categories'] as const
}

export function getStopPointMetaCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaCategoriesQueryKey>
  >({
    queryKey: getStopPointMetaCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointMetaCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointMetaCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointMetaCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStopPointMetaModesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/Modes'] as const
}

export function getStopPointMetaModesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaModesQueryKey>
  >({
    queryKey: getStopPointMetaModesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Meta.Modes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointMetaModesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointMetaModesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStopPointMetaStopTypesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/StopTypes'] as const
}

export function getStopPointMetaStopTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaStopTypesQueryKey>
  >({
    queryKey: getStopPointMetaStopTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Meta.StopTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointMetaStopTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointMetaStopTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointMetaStopTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStopPointModeModesQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes', args] as const
}

export function getStopPointModeModesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointModeModesQueryKey>
  >({
    queryKey: getStopPointModeModesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Mode[':modes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointModeModes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointModeModesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointModeModesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointModeModesDisruptionQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes/Disruption', args] as const
}

export function getStopPointModeModesDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointModeModesDisruptionQueryKey>
  >({
    queryKey: getStopPointModeModesDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Mode[':modes'].Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointModeModesDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointModeModesDisruptionQueryKey>
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
      ...getStopPointModeModesDisruptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointSearchQueryKey(
  args: InferRequestType<typeof client.StopPoint.Search.$get>,
) {
  return ['StopPoint', '/StopPoint/Search', args] as const
}

export function getStopPointSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.StopPoint.Search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSearchQueryKey>
  >({
    queryKey: getStopPointSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStopPointSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.StopPoint.Search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointSearchQueryQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Search/:query', args] as const
}

export function getStopPointSearchQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSearchQueryQueryKey>
  >({
    queryKey: getStopPointSearchQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Search[':query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointSearchQueryQueryKey>
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
      ...getStopPointSearchQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointServiceTypesQueryKey(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
) {
  return ['StopPoint', '/StopPoint/ServiceTypes', args] as const
}

export function getStopPointServiceTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointServiceTypesQueryKey>
  >({
    queryKey: getStopPointServiceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.ServiceTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointServiceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointServiceTypesQueryKey>
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
      ...getStopPointServiceTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointSmsIdQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Sms/:id', args] as const
}

export function getStopPointSmsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSmsIdQueryKey>
  >({
    queryKey: getStopPointSmsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Sms[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStopPointSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointSmsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointSmsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointTypeTypesQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Type/:types', args] as const
}

export function getStopPointTypeTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointTypeTypesQueryKey>
  >({
    queryKey: getStopPointTypeTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Type[':types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointTypeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointTypeTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointTypeTypesPagePageQueryKey(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
) {
  return ['StopPoint', '/StopPoint/Type/:types/page/:page', args] as const
}

export function getStopPointTypeTypesPagePageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointTypeTypesPagePageQueryKey>
  >({
    queryKey: getStopPointTypeTypesPagePageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint.Type[':types'].page[':page'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointTypeTypesPagePage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointTypeTypesPagePageQueryKey>
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
      ...getStopPointTypeTypesPagePageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdsQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:ids', args] as const
}

export function getStopPointIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdsQueryKey>
  >({
    queryKey: getStopPointIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStopPointIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointIdsDisruptionQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:ids/Disruption', args] as const
}

export function getStopPointIdsDisruptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdsDisruptionQueryKey>
  >({
    queryKey: getStopPointIdsDisruptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':ids'].Disruption.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdsDisruptionQueryKey>
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
      ...getStopPointIdsDisruptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdArrivalDeparturesQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/ArrivalDepartures', args] as const
}

export function getStopPointIdArrivalDeparturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdArrivalDeparturesQueryKey>
  >({
    queryKey: getStopPointIdArrivalDeparturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].ArrivalDepartures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdArrivalDepartures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdArrivalDeparturesQueryKey>
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
      ...getStopPointIdArrivalDeparturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdArrivalsQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Arrivals', args] as const
}

export function getStopPointIdArrivalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdArrivalsQueryKey>
  >({
    queryKey: getStopPointIdArrivalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].Arrivals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdArrivalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointIdArrivalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointIdCanReachOnLineLineIdQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/CanReachOnLine/:lineId', args] as const
}

export function getStopPointIdCanReachOnLineLineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdCanReachOnLineLineIdQueryKey>
  >({
    queryKey: getStopPointIdCanReachOnLineLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdCanReachOnLineLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdCanReachOnLineLineIdQueryKey>
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
      ...getStopPointIdCanReachOnLineLineIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdCrowdingLineQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Crowding/:line', args] as const
}

export function getStopPointIdCrowdingLineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdCrowdingLineQueryKey>
  >({
    queryKey: getStopPointIdCrowdingLineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].Crowding[':line'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdCrowdingLine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdCrowdingLineQueryKey>
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
      ...getStopPointIdCrowdingLineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdDirectionToToStopPointIdQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/DirectionTo/:toStopPointId', args] as const
}

export function getStopPointIdDirectionToToStopPointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdDirectionToToStopPointIdQueryKey>
  >({
    queryKey: getStopPointIdDirectionToToStopPointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdDirectionToToStopPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdDirectionToToStopPointIdQueryKey>
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
      ...getStopPointIdDirectionToToStopPointIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointIdRouteQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/Route', args] as const
}

export function getStopPointIdRouteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdRouteQueryKey>
  >({
    queryKey: getStopPointIdRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].Route.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopPointIdRouteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStopPointIdPlaceTypesQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:id/placeTypes', args] as const
}

export function getStopPointIdPlaceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdPlaceTypesQueryKey>
  >({
    queryKey: getStopPointIdPlaceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':id'].placeTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointIdPlaceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointIdPlaceTypesQueryKey>
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
      ...getStopPointIdPlaceTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointStopPointIdCarParksQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/CarParks', args] as const
}

export function getStopPointStopPointIdCarParksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointStopPointIdCarParksQueryKey>
  >({
    queryKey: getStopPointStopPointIdCarParksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':stopPointId'].CarParks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointStopPointIdCarParks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointStopPointIdCarParksQueryKey>
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
      ...getStopPointStopPointIdCarParksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStopPointStopPointIdTaxiRanksQueryKey(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/TaxiRanks', args] as const
}

export function getStopPointStopPointIdTaxiRanksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointStopPointIdTaxiRanksQueryKey>
  >({
    queryKey: getStopPointStopPointIdTaxiRanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.StopPoint[':stopPointId'].TaxiRanks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStopPointStopPointIdTaxiRanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopPointStopPointIdTaxiRanksQueryKey>
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
      ...getStopPointStopPointIdTaxiRanksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
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

export function getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
    >
  >({
    queryKey:
      getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][
          ':mapCenterLon'
        ].pinlocation[':pinLat'][':pinLon'].dimensions[':width'][':height'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
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
      ...getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
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

export function getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
    >
  >({
    queryKey:
      getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
          ':pinLat'
        ][':pinLon'].dimensions[':width'][':height'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
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
      ...getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVehicleIdsArrivalsQueryKey(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
) {
  return ['Vehicle', '/Vehicle/:ids/Arrivals', args] as const
}

export function getVehicleIdsArrivalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehicleIdsArrivalsQueryKey>
  >({
    queryKey: getVehicleIdsArrivalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Vehicle[':ids'].Arrivals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehicleIdsArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVehicleIdsArrivalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVehicleIdsArrivalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
