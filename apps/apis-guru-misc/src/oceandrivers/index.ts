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
} from './routes'
import {
  getV10CompareStationStationNameIndexRouteHandler,
  getV10GetAemetStationStationNamePeriodIndexRouteHandler,
  getV10GetEasyWindEasywindIdIndexRouteHandler,
  getV10GetEventStationsEventIdIndexRouteHandler,
  getV10GetForecastPointsYatchclubidLanguageLanguageRouteHandler,
  getV10GetForecastTimeSeriesLatitudeLongitudeIndexRouteHandler,
  getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRouteHandler,
  getV10GetSocibWeatherStationStationNamePeriodIndexRouteHandler,
  getV10GetWeatherDisplayStationNameIndexRouteHandler,
  getV10GetWebCamsIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV10CompareStationStationNameIndexRoute,
    getV10CompareStationStationNameIndexRouteHandler,
  )
  .openapi(
    getV10GetAemetStationStationNamePeriodIndexRoute,
    getV10GetAemetStationStationNamePeriodIndexRouteHandler,
  )
  .openapi(getV10GetEasyWindEasywindIdIndexRoute, getV10GetEasyWindEasywindIdIndexRouteHandler)
  .openapi(getV10GetEventStationsEventIdIndexRoute, getV10GetEventStationsEventIdIndexRouteHandler)
  .openapi(
    getV10GetForecastPointsYatchclubidLanguageLanguageRoute,
    getV10GetForecastPointsYatchclubidLanguageLanguageRouteHandler,
  )
  .openapi(
    getV10GetForecastTimeSeriesLatitudeLongitudeIndexRoute,
    getV10GetForecastTimeSeriesLatitudeLongitudeIndexRouteHandler,
  )
  .openapi(
    getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRoute,
    getV10GetForecastTimeSeriesWrfLatitudeLongitudeIndexRouteHandler,
  )
  .openapi(
    getV10GetSocibWeatherStationStationNamePeriodIndexRoute,
    getV10GetSocibWeatherStationStationNamePeriodIndexRouteHandler,
  )
  .openapi(
    getV10GetWeatherDisplayStationNameIndexRoute,
    getV10GetWeatherDisplayStationNameIndexRouteHandler,
  )
  .openapi(getV10GetWebCamsIndexRoute, getV10GetWebCamsIndexRouteHandler)

export default app
