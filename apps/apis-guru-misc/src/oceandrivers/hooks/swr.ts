import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1_0Key() {
  return ['v1.0'] as const
}

export function getGetV10CompareStationStationNameIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/compareStation/:stationName/', args] as const
}

export function useGetV10CompareStationStationNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
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
        ? getGetV10CompareStationStationNameIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v1.0'].compareStation[':stationName'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10CompareStationStationNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
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
        ? getGetV10CompareStationStationNameIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['v1.0'].compareStation[':stationName'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetAemetStationStationNamePeriodIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getAemetStation/:stationName/:period/', args] as const
}

export function useGetV10GetAemetStationStationNamePeriodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetAemetStationStationNamePeriodIndexKey(args)
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
                (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
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
          client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetAemetStationStationNamePeriodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetAemetStationStationNamePeriodIndexKey(args)
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
                (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
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
          client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetEasyWindEasywindIdIndexKey(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
) {
  return ['v1.0', '/v1.0/getEasyWind/:easywindId/', args] as const
}

export function useGetV10GetEasyWindEasywindIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
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
        ? getGetV10GetEasyWindEasywindIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v1.0'].getEasyWind[':easywindId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetEasyWindEasywindIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
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
        ? getGetV10GetEasyWindEasywindIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v1.0'].getEasyWind[':easywindId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetEventStationsEventIdIndexKey(
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
) {
  return ['v1.0', '/v1.0/getEventStations/:eventId/', args] as const
}

export function useGetV10GetEventStationsEventIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
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
        ? getGetV10GetEventStationsEventIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v1.0'].getEventStations[':eventId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetEventStationsEventIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
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
        ? getGetV10GetEventStationsEventIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['v1.0'].getEventStations[':eventId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetForecastPointsYatchclubidLanguageLanguageKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastPoints/:yatchclubid/language/:language', args] as const
}

export function useGetV10GetForecastPointsYatchclubidLanguageLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastPointsYatchclubidLanguageLanguageKey(args)
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
                (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
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
          client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetForecastPointsYatchclubidLanguageLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastPointsYatchclubidLanguageLanguageKey(args)
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
                (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
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
          client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetForecastTimeSeriesLatitudeLongitudeIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeries/:latitude/:longitude/', args] as const
}

export function useGetV10GetForecastTimeSeriesLatitudeLongitudeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastTimeSeriesLatitudeLongitudeIndexKey(args)
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
                (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
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
          client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetForecastTimeSeriesLatitudeLongitudeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastTimeSeriesLatitudeLongitudeIndexKey(args)
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
                (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
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
          client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getForecastTimeSeriesWrf/:latitude/:longitude/', args] as const
}

export function useGetV10GetForecastTimeSeriesWrfLatitudeLongitudeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexKey(args)
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
                (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
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
          client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetForecastTimeSeriesWrfLatitudeLongitudeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexKey(args)
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
                (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
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
          client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetSocibWeatherStationStationNamePeriodIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getSocibWeatherStation/:stationName/:period/', args] as const
}

export function useGetV10GetSocibWeatherStationStationNamePeriodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetSocibWeatherStationStationNamePeriodIndexKey(args)
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
                (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
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
          client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetSocibWeatherStationStationNamePeriodIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetSocibWeatherStationStationNamePeriodIndexKey(args)
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
                (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
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
          client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetWeatherDisplayStationNameIndexKey(
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
) {
  return ['v1.0', '/v1.0/getWeatherDisplay/:stationName/', args] as const
}

export function useGetV10GetWeatherDisplayStationNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetWeatherDisplayStationNameIndexKey(args)
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
                (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
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
          client['v1.0'].getWeatherDisplay[':stationName'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetWeatherDisplayStationNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV10GetWeatherDisplayStationNameIndexKey(args)
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
                (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
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
          client['v1.0'].getWeatherDisplay[':stationName'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV10GetWebCamsIndexKey() {
  return ['v1.0', '/v1.0/getWebCams/'] as const
}

export function useGetV10GetWebCamsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV10GetWebCamsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v1.0'].getWebCams.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10GetWebCamsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV10GetWebCamsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['v1.0']['getWebCams']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['v1.0'].getWebCams.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
