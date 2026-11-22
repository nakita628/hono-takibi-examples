import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV10CompareStationStationNameIndexRoute,
  getV10GetAemetStationStationNamePeriodIndexRoute,
  getV10GetEasyWindEasywindIdIndexRoute,
  getV10GetEventStationsEventIdIndexRoute,
  getV10GetForecastPointsYatchclubidLanguageLanguageRoute,
  getV10GetForecastTimeSeriesLatitudeLongitudeIndexRoute,
  getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRoute,
  getV10GetSocibWeatherStationStationNamePeriodIndexRoute,
  getV10GetWeatherDisplayStationNameIndexRoute,
  getV10GetWebCamsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const odWeatherHandler = app
  .openapi(getV10CompareStationStationNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetAemetStationStationNamePeriodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetEasyWindEasywindIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetEventStationsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetForecastPointsYatchclubidLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetForecastTimeSeriesLatitudeLongitudeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetSocibWeatherStationStationNamePeriodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetWeatherDisplayStationNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10GetWebCamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
