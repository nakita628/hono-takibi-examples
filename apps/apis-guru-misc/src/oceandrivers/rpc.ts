import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV10CompareStationStationNameIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['compareStation'][':stationName']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].compareStation[':stationName'].index.$get(args, options),
  )
}

export async function getV10GetAemetStationStationNamePeriodIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['getAemetStation'][':stationName'][':period']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getAemetStation[':stationName'][':period'].index.$get(args, options),
  )
}

export async function getV10GetEasyWindEasywindIdIndex(
  args: InferRequestType<(typeof client)['v1.0']['getEasyWind'][':easywindId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v1.0'].getEasyWind[':easywindId'].index.$get(args, options))
}

export async function getV10GetEventStationsEventIdIndex(
  args: InferRequestType<(typeof client)['v1.0']['getEventStations'][':eventId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v1.0'].getEventStations[':eventId'].index.$get(args, options))
}

export async function getV10GetForecastPointsYatchclubidLanguageLanguage(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastPoints'][':yatchclubid']['language'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getForecastPoints[':yatchclubid'].language[':language'].$get(args, options),
  )
}

export async function getV10GetForecastTimeSeriesLatitudeLongitudeIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeries'][':latitude'][':longitude']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getForecastTimeSeries[':latitude'][':longitude'].index.$get(args, options),
  )
}

export async function getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['getForecastTimeSeriesWrf'][':latitude'][':longitude']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getForecastTimeSeriesWrf[':latitude'][':longitude'].index.$get(args, options),
  )
}

export async function getV10GetSocibWeatherStationStationNamePeriodIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['getSocibWeatherStation'][':stationName'][':period']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getSocibWeatherStation[':stationName'][':period'].index.$get(args, options),
  )
}

export async function getV10GetWeatherDisplayStationNameIndex(
  args: InferRequestType<
    (typeof client)['v1.0']['getWeatherDisplay'][':stationName']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v1.0'].getWeatherDisplay[':stationName'].index.$get(args, options),
  )
}

export async function getV10GetWebCamsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client['v1.0'].getWebCams.index.$get(undefined, options))
}
