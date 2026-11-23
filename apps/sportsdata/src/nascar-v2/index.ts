import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDriverDriveridRoute,
  getFormatDriverRaceProjectionsRaceidRoute,
  getFormatDriversRoute,
  getFormatRaceresultRaceidRoute,
  getFormatRacesSeasonRoute,
  getFormatSeriesRoute,
} from './routes'
import {
  getFormatDriverDriveridRouteHandler,
  getFormatDriverRaceProjectionsRaceidRouteHandler,
  getFormatDriversRouteHandler,
  getFormatRaceresultRaceidRouteHandler,
  getFormatRacesSeasonRouteHandler,
  getFormatSeriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getFormatDriverRaceProjectionsRaceidRoute,
    getFormatDriverRaceProjectionsRaceidRouteHandler,
  )
  .openapi(getFormatDriverDriveridRoute, getFormatDriverDriveridRouteHandler)
  .openapi(getFormatDriversRoute, getFormatDriversRouteHandler)
  .openapi(getFormatRaceresultRaceidRoute, getFormatRaceresultRaceidRouteHandler)
  .openapi(getFormatRacesSeasonRoute, getFormatRacesSeasonRouteHandler)
  .openapi(getFormatSeriesRoute, getFormatSeriesRouteHandler)

export default app
