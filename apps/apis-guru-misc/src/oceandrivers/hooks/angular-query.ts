import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1_0Key() {
  return ['v1.0'] as const
}

export function getV10CompareStationStationNameIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/compareStation/:stationName/', args] as const
}

export function getV10CompareStationStationNameIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10CompareStationStationNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].compareStation[':stationName'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10CompareStationStationNameIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV10CompareStationStationNameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10CompareStationStationNameIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetAemetStationStationNamePeriodIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getAemetStation/:stationName/:period/', args] as const
}

export function getV10GetAemetStationStationNamePeriodIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetAemetStationStationNamePeriodIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetAemetStationStationNamePeriodIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetAemetStationStationNamePeriodIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetEasyWindEasywindIdIndexQueryKey(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
) {
  return ['v1.0', '/v1.0/getEasyWind/:easywindId/', args] as const
}

export function getV10GetEasyWindEasywindIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetEasyWindEasywindIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getEasyWind[':easywindId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetEasyWindEasywindIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetEasyWindEasywindIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetEventStationsEventIdIndexQueryKey(
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
) {
  return ['v1.0', '/v1.0/getEventStations/:eventId/', args] as const
}

export function getV10GetEventStationsEventIdIndexQueryOptions<
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
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetEventStationsEventIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getEventStations[':eventId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetEventStationsEventIdIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetEventStationsEventIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastPoints/:yatchclubid/language/:language', args] as const
}

export function getV10GetForecastPointsYatchclubidLanguageLanguageQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetForecastPointsYatchclubidLanguageLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetForecastPointsYatchclubidLanguageLanguage<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetForecastPointsYatchclubidLanguageLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeries/:latitude/:longitude/', args] as const
}

export function getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetForecastTimeSeriesLatitudeLongitudeIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetForecastTimeSeriesLatitudeLongitudeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeriesWrf/:latitude/:longitude/', args] as const
}

export function getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetForecastTimeSeriesWrfLatitudeLongitudeIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getSocibWeatherStation/:stationName/:period/', args] as const
}

export function getV10GetSocibWeatherStationStationNamePeriodIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetSocibWeatherStationStationNamePeriodIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetSocibWeatherStationStationNamePeriodIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetSocibWeatherStationStationNamePeriodIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetWeatherDisplayStationNameIndexQueryKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getWeatherDisplay/:stationName/', args] as const
}

export function getV10GetWeatherDisplayStationNameIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV10GetWeatherDisplayStationNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getWeatherDisplay[':stationName'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetWeatherDisplayStationNameIndex<
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
  args: () => InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV10GetWeatherDisplayStationNameIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV10GetWebCamsIndexQueryKey() {
  return ['v1.0', '/v1.0/getWebCams/'] as const
}

export function getV10GetWebCamsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV10GetWebCamsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.0'].getWebCams.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV10GetWebCamsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV10GetWebCamsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV10GetWebCamsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
