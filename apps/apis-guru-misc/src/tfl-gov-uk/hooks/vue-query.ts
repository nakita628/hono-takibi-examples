import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.AccidentStats)[':year']['$get']>>,
) {
  return ['AccidentStats', '/AccidentStats/:year', toValue(args)] as const
}

export function getAccidentStatsYearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.AccidentStats)[':year']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccidentStatsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.AccidentStats[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccidentStatsYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.AccidentStats)[':year']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccidentStatsYearQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.AccidentStats)[':year']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccidentStatsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccidentStatsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.AccidentStats[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAirQualityQueryKey() {
  return ['AirQuality', '/AirQuality'] as const
}

export function getAirQualityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAirQualityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.AirQuality.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAirQuality<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>
          >,
          ReturnType<typeof getAirQualityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AirQuality.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAirQualityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAirQualityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.AirQuality.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBikePointQueryKey() {
  return ['BikePoint', '/BikePoint'] as const
}

export function getBikePointQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBikePointQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BikePoint.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBikePoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>
          >,
          ReturnType<typeof getBikePointQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBikePointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBikePointQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.BikePoint.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBikePointSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BikePoint.Search.$get>>,
) {
  return ['BikePoint', '/BikePoint/Search', toValue(args)] as const
}

export function getBikePointSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BikePoint.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBikePointSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BikePoint.Search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBikePointSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.BikePoint.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>
            >
          >,
          ReturnType<typeof getBikePointSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BikePoint.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBikePointSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBikePointSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BikePoint.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBikePointIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.BikePoint)[':id']['$get']>>,
) {
  return ['BikePoint', '/BikePoint/:id', toValue(args)] as const
}

export function getBikePointIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.BikePoint)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBikePointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.BikePoint[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBikePointId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.BikePoint)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBikePointIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.BikePoint)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBikePointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBikePointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.BikePoint[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCabwiseSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Cabwise.search.$get>>,
) {
  return ['Cabwise', '/Cabwise/search', toValue(args)] as const
}

export function getCabwiseSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Cabwise.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCabwiseSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Cabwise.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCabwiseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Cabwise.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
          >,
          ReturnType<typeof getCabwiseSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Cabwise.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCabwiseSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCabwiseSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Cabwise.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJourneyJourneyResultsFromToToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
  >,
) {
  return ['Journey', '/Journey/JourneyResults/:from/to/:to', toValue(args)] as const
}

export function getJourneyJourneyResultsFromToToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJourneyJourneyResultsFromToToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Journey.JourneyResults[':from'].to[':to'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJourneyJourneyResultsFromToTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getJourneyJourneyResultsFromToToQueryKey>
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
          Awaited<ReturnType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJourneyJourneyResultsFromToToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJourneyJourneyResultsFromToToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Journey.JourneyResults[':from'].to[':to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJourneyMetaModesQueryKey() {
  return ['Journey', '/Journey/Meta/Modes'] as const
}

export function getJourneyMetaModesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJourneyMetaModesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Journey.Meta.Modes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJourneyMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>
            >
          >,
          ReturnType<typeof getJourneyMetaModesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Journey.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJourneyMetaModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJourneyMetaModesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Journey.Meta.Modes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineMetaDisruptionCategoriesQueryKey() {
  return ['Line', '/Line/Meta/DisruptionCategories'] as const
}

export function getLineMetaDisruptionCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLineMetaDisruptionCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Meta.DisruptionCategories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineMetaDisruptionCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
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
                Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>
              >
            >
          >,
          ReturnType<typeof getLineMetaDisruptionCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.DisruptionCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaDisruptionCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLineMetaDisruptionCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Meta.DisruptionCategories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineMetaModesQueryKey() {
  return ['Line', '/Line/Meta/Modes'] as const
}

export function getLineMetaModesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLineMetaModesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Meta.Modes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLineMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>
            >
          >,
          ReturnType<typeof getLineMetaModesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLineMetaModesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Meta.Modes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineMetaServiceTypesQueryKey() {
  return ['Line', '/Line/Meta/ServiceTypes'] as const
}

export function getLineMetaServiceTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLineMetaServiceTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Meta.ServiceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineMetaServiceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
            >
          >,
          ReturnType<typeof getLineMetaServiceTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.ServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaServiceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLineMetaServiceTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Meta.ServiceTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineMetaSeverityQueryKey() {
  return ['Line', '/Line/Meta/Severity'] as const
}

export function getLineMetaSeverityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLineMetaSeverityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Meta.Severity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineMetaSeverity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>
            >
          >,
          ReturnType<typeof getLineMetaSeverityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Meta.Severity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineMetaSeverityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLineMetaSeverityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Meta.Severity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineModeModesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>>,
) {
  return ['Line', '/Line/Mode/:modes', toValue(args)] as const
}

export function getLineModeModesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineModeModesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Mode[':modes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineModeModes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
            >
          >,
          ReturnType<typeof getLineModeModesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineModeModesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Mode[':modes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineModeModesDisruptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>
  >,
) {
  return ['Line', '/Line/Mode/:modes/Disruption', toValue(args)] as const
}

export function getLineModeModesDisruptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineModeModesDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Mode[':modes'].Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineModeModesDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineModeModesDisruptionQueryKey>
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
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineModeModesDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Mode[':modes'].Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineModeModesRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>,
) {
  return ['Line', '/Line/Mode/:modes/Route', toValue(args)] as const
}

export function getLineModeModesRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineModeModesRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Mode[':modes'].Route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineModeModesRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineModeModesRouteQueryKey>
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
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Route']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineModeModesRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Mode[':modes'].Route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineModeModesStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>,
) {
  return ['Line', '/Line/Mode/:modes/Status', toValue(args)] as const
}

export function getLineModeModesStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineModeModesStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Mode[':modes'].Status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineModeModesStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineModeModesStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.Line.Mode)[':modes']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineModeModesStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineModeModesStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Mode[':modes'].Status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Line.Route.$get>>,
) {
  return ['Line', '/Line/Route', toValue(args)] as const
}

export function getLineRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Line.Route.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Route.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLineRoute<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Line.Route.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>
          >,
          ReturnType<typeof getLineRouteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Line.Route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLineRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineSearchQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Search)[':query']['$get']>>,
) {
  return ['Line', '/Line/Search/:query', toValue(args)] as const
}

export function getLineSearchQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Search)[':query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineSearchQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Search[':query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Search)[':query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineSearchQueryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Search)[':query']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineSearchQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineSearchQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Search[':query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineStatusSeverityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Status)[':severity']['$get']>>,
) {
  return ['Line', '/Line/Status/:severity', toValue(args)] as const
}

export function getLineStatusSeverityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Status)[':severity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineStatusSeverityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line.Status[':severity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineStatusSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line.Status)[':severity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineStatusSeverityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line.Status)[':severity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineStatusSeverityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineStatusSeverityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line.Status[':severity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['$get']>>,
) {
  return ['Line', '/Line/:ids', toValue(args)] as const
}

export function getLineIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLineIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getLineIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsArrivalsStopPointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>
  >,
) {
  return ['Line', '/Line/:ids/Arrivals/:stopPointId', toValue(args)] as const
}

export function getLineIdsArrivalsStopPointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsArrivalsStopPointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].Arrivals[':stopPointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdsArrivalsStopPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>
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
                  ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLineIdsArrivalsStopPointIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsArrivalsStopPointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsArrivalsStopPointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].Arrivals[':stopPointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsDisruptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>>,
) {
  return ['Line', '/Line/:ids/Disruption', toValue(args)] as const
}

export function getLineIdsDisruptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineIdsDisruptionQueryKey>
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
          Awaited<ReturnType<(typeof client.Line)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>>,
) {
  return ['Line', '/Line/:ids/Route', toValue(args)] as const
}

export function getLineIdsRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].Route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdsRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineIdsRouteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Route']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].Route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>>,
) {
  return ['Line', '/Line/:ids/Status', toValue(args)] as const
}

export function getLineIdsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].Status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineIdsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':ids']['Status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].Status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdsStatusStartDateToEndDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']>
  >,
) {
  return ['Line', '/Line/:ids/Status/:StartDate/to/:EndDate', toValue(args)] as const
}

export function getLineIdsStatusStartDateToEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdsStatusStartDateToEndDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdsStatusStartDateToEndDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']>
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
                    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
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
                    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLineIdsStatusStartDateToEndDateQueryKey>
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
              (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdsStatusStartDateToEndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdsStatusStartDateToEndDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdRouteSequenceDirectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
  >,
) {
  return ['Line', '/Line/:id/Route/Sequence/:direction', toValue(args)] as const
}

export function getLineIdRouteSequenceDirectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdRouteSequenceDirectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':id'].Route.Sequence[':direction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdRouteSequenceDirection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLineIdRouteSequenceDirectionQueryKey>
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
            ReturnType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdRouteSequenceDirectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdRouteSequenceDirectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':id'].Route.Sequence[':direction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdStopPointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>>,
) {
  return ['Line', '/Line/:id/StopPoints', toValue(args)] as const
}

export function getLineIdStopPointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdStopPointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':id'].StopPoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdStopPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLineIdStopPointsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Line)[':id']['StopPoints']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdStopPointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdStopPointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':id'].StopPoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdTimetableFromStopPointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
  >,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId', toValue(args)] as const
}

export function getLineIdTimetableFromStopPointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdTimetableFromStopPointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':id'].Timetable[':fromStopPointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdTimetableFromStopPointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLineIdTimetableFromStopPointIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdTimetableFromStopPointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdTimetableFromStopPointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':id'].Timetable[':fromStopPointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
    >
  >,
) {
  return ['Line', '/Line/:id/Timetable/:fromStopPointId/to/:toStopPointId', toValue(args)] as const
}

export function getLineIdTimetableFromStopPointIdToToStopPointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLineIdTimetableFromStopPointIdToToStopPointId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
                    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
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
                    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey>
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
              (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLineIdTimetableFromStopPointIdToToStopPointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getModeActiveServiceTypesQueryKey() {
  return ['Mode', '/Mode/ActiveServiceTypes'] as const
}

export function getModeActiveServiceTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getModeActiveServiceTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Mode.ActiveServiceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModeActiveServiceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
            >
          >,
          ReturnType<typeof getModeActiveServiceTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Mode.ActiveServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModeActiveServiceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getModeActiveServiceTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Mode.ActiveServiceTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModeModeArrivalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>,
) {
  return ['Mode', '/Mode/:mode/Arrivals', toValue(args)] as const
}

export function getModeModeArrivalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModeModeArrivalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Mode[':mode'].Arrivals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModeModeArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModeModeArrivalsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Mode)[':mode']['Arrivals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModeModeArrivalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModeModeArrivalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Mode[':mode'].Arrivals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupancyBikePointsIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>,
) {
  return ['Occupancy', '/Occupancy/BikePoints/:ids', toValue(args)] as const
}

export function getOccupancyBikePointsIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupancyBikePointsIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Occupancy.BikePoints[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupancyBikePointsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupancyBikePointsIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyBikePointsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupancyBikePointsIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Occupancy.BikePoints[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupancyCarParkQueryKey() {
  return ['Occupancy', '/Occupancy/CarPark'] as const
}

export function getOccupancyCarParkQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOccupancyCarParkQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Occupancy.CarPark.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupancyCarPark<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>
            >
          >,
          ReturnType<typeof getOccupancyCarParkQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.CarPark.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyCarParkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOccupancyCarParkQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Occupancy.CarPark.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupancyCarParkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>>,
) {
  return ['Occupancy', '/Occupancy/CarPark/:id', toValue(args)] as const
}

export function getOccupancyCarParkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupancyCarParkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Occupancy.CarPark[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupancyCarParkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupancyCarParkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Occupancy.CarPark)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyCarParkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupancyCarParkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Occupancy.CarPark[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupancyChargeConnectorQueryKey() {
  return ['Occupancy', '/Occupancy/ChargeConnector'] as const
}

export function getOccupancyChargeConnectorQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOccupancyChargeConnectorQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Occupancy.ChargeConnector.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupancyChargeConnector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
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
                Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>
              >
            >
          >,
          ReturnType<typeof getOccupancyChargeConnectorQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Occupancy.ChargeConnector.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyChargeConnectorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOccupancyChargeConnectorQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Occupancy.ChargeConnector.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupancyChargeConnectorIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>
  >,
) {
  return ['Occupancy', '/Occupancy/ChargeConnector/:ids', toValue(args)] as const
}

export function getOccupancyChargeConnectorIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupancyChargeConnectorIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Occupancy.ChargeConnector[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupancyChargeConnectorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOccupancyChargeConnectorIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOccupancyChargeConnectorIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupancyChargeConnectorIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Occupancy.ChargeConnector[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.$get>>,
) {
  return ['Place', '/Place', toValue(args)] as const
}

export function getPlaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlace<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
          ReturnType<typeof getPlaceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceAddressStreetsPostcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>
  >,
) {
  return ['Place', '/Place/Address/Streets/:Postcode', toValue(args)] as const
}

export function getPlaceAddressStreetsPostcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceAddressStreetsPostcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.Address.Streets[':Postcode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaceAddressStreetsPostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaceAddressStreetsPostcodeQueryKey>
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
          Awaited<ReturnType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceAddressStreetsPostcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceAddressStreetsPostcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.Address.Streets[':Postcode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceMetaCategoriesQueryKey() {
  return ['Place', '/Place/Meta/Categories'] as const
}

export function getPlaceMetaCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlaceMetaCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaceMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
            >
          >,
          ReturnType<typeof getPlaceMetaCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceMetaCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlaceMetaCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.Meta.Categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceMetaPlaceTypesQueryKey() {
  return ['Place', '/Place/Meta/PlaceTypes'] as const
}

export function getPlaceMetaPlaceTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlaceMetaPlaceTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.Meta.PlaceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaceMetaPlaceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
            >
          >,
          ReturnType<typeof getPlaceMetaPlaceTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Place.Meta.PlaceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceMetaPlaceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlaceMetaPlaceTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.Meta.PlaceTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.Search.$get>>,
) {
  return ['Place', '/Place/Search', toValue(args)] as const
}

export function getPlaceSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.Search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaceSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Place.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>
          >,
          ReturnType<typeof getPlaceSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Place.Search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaceSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceTypeTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place.Type)[':types']['$get']>>,
) {
  return ['Place', '/Place/Type/:types', toValue(args)] as const
}

export function getPlaceTypeTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place.Type)[':types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceTypeTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place.Type[':types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaceTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place.Type)[':types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaceTypeTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Place.Type)[':types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceTypeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceTypeTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place.Type[':types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place)[':id']['$get']>>,
) {
  return ['Place', '/Place/:id', toValue(args)] as const
}

export function getPlaceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaceId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Place)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlaceIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Place)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceTypeAtLatLonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>
  >,
) {
  return ['Place', '/Place/:type/At/:Lat/:Lon', toValue(args)] as const
}

export function getPlaceTypeAtLatLonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceTypeAtLatLonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place[':type'].At[':Lat'][':Lon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaceTypeAtLatLon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaceTypeAtLatLonQueryKey>
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
          Awaited<ReturnType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceTypeAtLatLonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceTypeAtLatLonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place[':type'].At[':Lat'][':Lon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaceTypeOverlayZLatLonWidthHeightQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
    >
  >,
) {
  return ['Place', '/Place/:type/overlay/:z/:Lat/:Lon/:width/:height', toValue(args)] as const
}

export function getPlaceTypeOverlayZLatLonWidthHeightQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaceTypeOverlayZLatLonWidthHeightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function usePlaceTypeOverlayZLatLonWidthHeight<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
                    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
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
                    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlaceTypeOverlayZLatLonWidthHeightQueryKey>
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
              (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaceTypeOverlayZLatLonWidthHeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaceTypeOverlayZLatLonWidthHeightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRoadQueryKey() {
  return ['Road', '/Road'] as const
}

export function getRoadQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRoadQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoad<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
          ReturnType<typeof getRoadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRoadQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Road.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadMetaCategoriesQueryKey() {
  return ['Road', '/Road/Meta/Categories'] as const
}

export function getRoadMetaCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRoadMetaCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>
            >
          >,
          ReturnType<typeof getRoadMetaCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadMetaCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRoadMetaCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Road.Meta.Categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadMetaSeveritiesQueryKey() {
  return ['Road', '/Road/Meta/Severities'] as const
}

export function getRoadMetaSeveritiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRoadMetaSeveritiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road.Meta.Severities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadMetaSeverities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>
            >
          >,
          ReturnType<typeof getRoadMetaSeveritiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Road.Meta.Severities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadMetaSeveritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRoadMetaSeveritiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Road.Meta.Severities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadAllDisruptionDisruptionIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>
  >,
) {
  return ['Road', '/Road/all/Disruption/:disruptionIds', toValue(args)] as const
}

export function getRoadAllDisruptionDisruptionIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoadAllDisruptionDisruptionIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road.all.Disruption[':disruptionIds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadAllDisruptionDisruptionIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoadAllDisruptionDisruptionIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadAllDisruptionDisruptionIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoadAllDisruptionDisruptionIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Road.all.Disruption[':disruptionIds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadAllStreetDisruptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Road.all.Street.Disruption.$get>>,
) {
  return ['Road', '/Road/all/Street/Disruption', toValue(args)] as const
}

export function getRoadAllStreetDisruptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Road.all.Street.Disruption.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoadAllStreetDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road.all.Street.Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadAllStreetDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Road.all.Street.Disruption.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>
              >
            >
          >,
          ReturnType<typeof getRoadAllStreetDisruptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Road.all.Street.Disruption.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadAllStreetDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoadAllStreetDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Road.all.Street.Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['$get']>>,
) {
  return ['Road', '/Road/:ids', toValue(args)] as const
}

export function getRoadIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoadIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road[':ids'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoadIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getRoadIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoadIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Road[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadIdsDisruptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>>,
) {
  return ['Road', '/Road/:ids/Disruption', toValue(args)] as const
}

export function getRoadIdsDisruptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoadIdsDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road[':ids'].Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoadIdsDisruptionQueryKey>
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
          Awaited<ReturnType<(typeof client.Road)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoadIdsDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Road[':ids'].Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoadIdsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>>,
) {
  return ['Road', '/Road/:ids/Status', toValue(args)] as const
}

export function getRoadIdsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoadIdsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Road[':ids'].Status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoadIdsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoadIdsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Road)[':ids']['Status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoadIdsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoadIdsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Road[':ids'].Status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.$get>>,
) {
  return ['Search', '/Search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchBusSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.BusSchedules.$get>>,
) {
  return ['Search', '/Search/BusSchedules', toValue(args)] as const
}

export function getSearchBusSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.BusSchedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchBusSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.BusSchedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchBusSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.BusSchedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>
            >
          >,
          ReturnType<typeof getSearchBusSchedulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.BusSchedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchBusSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchBusSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.BusSchedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMetaCategoriesQueryKey() {
  return ['Search', '/Search/Meta/Categories'] as const
}

export function getSearchMetaCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchMetaCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMetaCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
            >
          >,
          ReturnType<typeof getSearchMetaCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchMetaCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.Meta.Categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMetaSearchProvidersQueryKey() {
  return ['Search', '/Search/Meta/SearchProviders'] as const
}

export function getSearchMetaSearchProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchMetaSearchProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.Meta.SearchProviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMetaSearchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
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
                Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>
              >
            >
          >,
          ReturnType<typeof getSearchMetaSearchProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.SearchProviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaSearchProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchMetaSearchProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.Meta.SearchProviders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMetaSortsQueryKey() {
  return ['Search', '/Search/Meta/Sorts'] as const
}

export function getSearchMetaSortsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchMetaSortsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.Meta.Sorts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMetaSorts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>
            >
          >,
          ReturnType<typeof getSearchMetaSortsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Meta.Sorts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetaSortsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchMetaSortsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.Meta.Sorts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.$get>>,
) {
  return ['StopPoint', '/StopPoint', toValue(args)] as const
}

export function getStopPointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStopPoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>
          >,
          ReturnType<typeof getStopPointQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStopPointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointMetaCategoriesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/Categories'] as const
}

export function getStopPointMetaCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStopPointMetaCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Meta.Categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointMetaCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
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
                Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>
              >
            >
          >,
          ReturnType<typeof getStopPointMetaCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStopPointMetaCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Meta.Categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointMetaModesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/Modes'] as const
}

export function getStopPointMetaModesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStopPointMetaModesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Meta.Modes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointMetaModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>
            >
          >,
          ReturnType<typeof getStopPointMetaModesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.Modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStopPointMetaModesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Meta.Modes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointMetaStopTypesQueryKey() {
  return ['StopPoint', '/StopPoint/Meta/StopTypes'] as const
}

export function getStopPointMetaStopTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStopPointMetaStopTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Meta.StopTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointMetaStopTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
            >
          >,
          ReturnType<typeof getStopPointMetaStopTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Meta.StopTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointMetaStopTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStopPointMetaStopTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Meta.StopTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointModeModesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes', toValue(args)] as const
}

export function getStopPointModeModesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointModeModesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Mode[':modes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointModeModes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointModeModesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointModeModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointModeModesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Mode[':modes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointModeModesDisruptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/Mode/:modes/Disruption', toValue(args)] as const
}

export function getStopPointModeModesDisruptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointModeModesDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Mode[':modes'].Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointModeModesDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointModeModesDisruptionQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointModeModesDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointModeModesDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Mode[':modes'].Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.Search.$get>>,
) {
  return ['StopPoint', '/StopPoint/Search', toValue(args)] as const
}

export function getStopPointSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.Search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.Search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>
            >
          >,
          ReturnType<typeof getStopPointSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.Search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointSearchQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/Search/:query', toValue(args)] as const
}

export function getStopPointSearchQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointSearchQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Search[':query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointSearchQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointSearchQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint.Search)[':query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSearchQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointSearchQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Search[':query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointServiceTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.ServiceTypes.$get>>,
) {
  return ['StopPoint', '/StopPoint/ServiceTypes', toValue(args)] as const
}

export function getStopPointServiceTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.ServiceTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointServiceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.ServiceTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointServiceTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.StopPoint.ServiceTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
            >
          >,
          ReturnType<typeof getStopPointServiceTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.StopPoint.ServiceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointServiceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointServiceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.ServiceTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointSmsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/Sms/:id', toValue(args)] as const
}

export function getStopPointSmsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointSmsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Sms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointSmsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointSmsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Sms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointSmsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointSmsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Sms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointTypeTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/Type/:types', toValue(args)] as const
}

export function getStopPointTypeTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointTypeTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Type[':types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointTypeTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointTypeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointTypeTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Type[':types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointTypeTypesPagePageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/Type/:types/page/:page', toValue(args)] as const
}

export function getStopPointTypeTypesPagePageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointTypeTypesPagePageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint.Type[':types'].page[':page'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointTypeTypesPagePage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>
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
                  ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStopPointTypeTypesPagePageQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointTypeTypesPagePageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointTypeTypesPagePageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint.Type[':types'].page[':page'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/:ids', toValue(args)] as const
}

export function getStopPointIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
            >
          >,
          ReturnType<typeof getStopPointIdsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':ids']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdsDisruptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/:ids/Disruption', toValue(args)] as const
}

export function getStopPointIdsDisruptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdsDisruptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':ids'].Disruption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdsDisruption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdsDisruptionQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdsDisruptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdsDisruptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':ids'].Disruption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdArrivalDeparturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:id/ArrivalDepartures', toValue(args)] as const
}

export function getStopPointIdArrivalDeparturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdArrivalDeparturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].ArrivalDepartures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdArrivalDepartures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdArrivalDeparturesQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdArrivalDeparturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdArrivalDeparturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].ArrivalDepartures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdArrivalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/:id/Arrivals', toValue(args)] as const
}

export function getStopPointIdArrivalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdArrivalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].Arrivals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdArrivalsQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdArrivalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdArrivalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].Arrivals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdCanReachOnLineLineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:id/CanReachOnLine/:lineId', toValue(args)] as const
}

export function getStopPointIdCanReachOnLineLineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdCanReachOnLineLineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdCanReachOnLineLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStopPointIdCanReachOnLineLineIdQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdCanReachOnLineLineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdCanReachOnLineLineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdCrowdingLineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:id/Crowding/:line', toValue(args)] as const
}

export function getStopPointIdCrowdingLineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdCrowdingLineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].Crowding[':line'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdCrowdingLine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdCrowdingLineQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdCrowdingLineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdCrowdingLineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].Crowding[':line'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdDirectionToToStopPointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:id/DirectionTo/:toStopPointId', toValue(args)] as const
}

export function getStopPointIdDirectionToToStopPointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdDirectionToToStopPointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdDirectionToToStopPointId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
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
                    (typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']
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
                    (typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStopPointIdDirectionToToStopPointIdQueryKey>
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
            ReturnType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdDirectionToToStopPointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdDirectionToToStopPointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/:id/Route', toValue(args)] as const
}

export function getStopPointIdRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].Route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdRouteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.StopPoint)[':id']['Route']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].Route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointIdPlaceTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>,
) {
  return ['StopPoint', '/StopPoint/:id/placeTypes', toValue(args)] as const
}

export function getStopPointIdPlaceTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointIdPlaceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':id'].placeTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointIdPlaceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointIdPlaceTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointIdPlaceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointIdPlaceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':id'].placeTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointStopPointIdCarParksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/CarParks', toValue(args)] as const
}

export function getStopPointStopPointIdCarParksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointStopPointIdCarParksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':stopPointId'].CarParks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointStopPointIdCarParks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointStopPointIdCarParksQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointStopPointIdCarParksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointStopPointIdCarParksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':stopPointId'].CarParks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopPointStopPointIdTaxiRanksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>
  >,
) {
  return ['StopPoint', '/StopPoint/:stopPointId/TaxiRanks', toValue(args)] as const
}

export function getStopPointStopPointIdTaxiRanksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopPointStopPointIdTaxiRanksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.StopPoint[':stopPointId'].TaxiRanks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopPointStopPointIdTaxiRanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStopPointStopPointIdTaxiRanksQueryKey>
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
          Awaited<ReturnType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopPointStopPointIdTaxiRanksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopPointStopPointIdTaxiRanksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.StopPoint[':stopPointId'].TaxiRanks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
    >
  >,
) {
  return [
    'TravelTimes',
    '/TravelTimes/compareOverlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height',
    toValue(args),
  ] as const
}

export function getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][
          ':mapCenterLon'
        ].pinlocation[':pinLat'][':pinLon'].dimensions[':width'][':height'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
                    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
                    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][
            ':mapCenterLon'
          ].pinlocation[':pinLat'][':pinLon'].dimensions[':width'][':height'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
    >
  >,
) {
  return [
    'TravelTimes',
    '/TravelTimes/overlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height',
    toValue(args),
  ] as const
}

export function getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
          ':pinLat'
        ][':pinLon'].dimensions[':width'][':height'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
                    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
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
                    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
            ':pinLat'
          ][':pinLon'].dimensions[':width'][':height'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehicleIdsArrivalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>,
) {
  return ['Vehicle', '/Vehicle/:ids/Arrivals', toValue(args)] as const
}

export function getVehicleIdsArrivalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehicleIdsArrivalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Vehicle[':ids'].Arrivals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehicleIdsArrivals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehicleIdsArrivalsQueryKey>
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
          Awaited<ReturnType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehicleIdsArrivalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehicleIdsArrivalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Vehicle[':ids'].Arrivals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
