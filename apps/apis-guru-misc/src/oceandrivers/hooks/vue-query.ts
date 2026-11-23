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

export function getV1_0Key() {
  return ['v1.0'] as const
}

export function getV10CompareStationStationNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
  >,
) {
  return ['v1.0', '/v1.0/compareStation/:stationName/', toValue(args)] as const
}

export function getV10CompareStationStationNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10CompareStationStationNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].compareStation[':stationName'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10CompareStationStationNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
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
                    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
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
                    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10CompareStationStationNameIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10CompareStationStationNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10CompareStationStationNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].compareStation[':stationName'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetAemetStationStationNamePeriodIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
    >
  >,
) {
  return ['v1.0', '/v1.0/getAemetStation/:stationName/:period/', toValue(args)] as const
}

export function getV10GetAemetStationStationNamePeriodIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetAemetStationStationNamePeriodIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetAemetStationStationNamePeriodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
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
                    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
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
                    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetAemetStationStationNamePeriodIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetAemetStationStationNamePeriodIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetAemetStationStationNamePeriodIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetEasyWindEasywindIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
  >,
) {
  return ['v1.0', '/v1.0/getEasyWind/:easywindId/', toValue(args)] as const
}

export function getV10GetEasyWindEasywindIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetEasyWindEasywindIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getEasyWind[':easywindId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetEasyWindEasywindIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
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
                  ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV10GetEasyWindEasywindIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetEasyWindEasywindIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetEasyWindEasywindIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getEasyWind[':easywindId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetEventStationsEventIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
  >,
) {
  return ['v1.0', '/v1.0/getEventStations/:eventId/', toValue(args)] as const
}

export function getV10GetEventStationsEventIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetEventStationsEventIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getEventStations[':eventId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetEventStationsEventIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
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
                    (typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']
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
                    (typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetEventStationsEventIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetEventStationsEventIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetEventStationsEventIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getEventStations[':eventId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
    >
  >,
) {
  return ['v1.0', '/v1.0/getForecastPoints/:yatchclubid/language/:language', toValue(args)] as const
}

export function getV10GetForecastPointsYatchclubidLanguageLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetForecastPointsYatchclubidLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
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
                    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
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
                    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
    >
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeries/:latitude/:longitude/', toValue(args)] as const
}

export function getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetForecastTimeSeriesLatitudeLongitudeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
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
                    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
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
                    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
    >
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeriesWrf/:latitude/:longitude/', toValue(args)] as const
}

export function getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV10GetForecastTimeSeriesWrfLatitudeLongitudeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
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
                    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
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
                    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
    >
  >,
) {
  return ['v1.0', '/v1.0/getSocibWeatherStation/:stationName/:period/', toValue(args)] as const
}

export function getV10GetSocibWeatherStationStationNamePeriodIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetSocibWeatherStationStationNamePeriodIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
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
                    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
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
                    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetWeatherDisplayStationNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']>
  >,
) {
  return ['v1.0', '/v1.0/getWeatherDisplay/:stationName/', toValue(args)] as const
}

export function getV10GetWeatherDisplayStationNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV10GetWeatherDisplayStationNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getWeatherDisplay[':stationName'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetWeatherDisplayStationNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']>
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
                    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
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
                    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV10GetWeatherDisplayStationNameIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetWeatherDisplayStationNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV10GetWeatherDisplayStationNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getWeatherDisplay[':stationName'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV10GetWebCamsIndexQueryKey() {
  return ['v1.0', '/v1.0/getWebCams/'] as const
}

export function getV10GetWebCamsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV10GetWebCamsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.0'].getWebCams.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV10GetWebCamsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV10GetWebCamsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV10GetWebCamsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV10GetWebCamsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.0'].getWebCams.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
