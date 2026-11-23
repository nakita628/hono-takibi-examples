import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDepthChartsRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatPlayerSeasonProjectionStatsSeasonRoute,
  getFormatStartingLineupsByDateDateRoute,
} from './routes'
import {
  getFormatDepthChartsRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  getFormatPlayerSeasonProjectionStatsSeasonRouteHandler,
  getFormatStartingLineupsByDateDateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatDepthChartsRoute, getFormatDepthChartsRouteHandler)
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatInjuredPlayersRoute, getFormatInjuredPlayersRouteHandler)
  .openapi(
    getFormatPlayerGameProjectionStatsByDateDateRoute,
    getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonProjectionStatsSeasonRoute,
    getFormatPlayerSeasonProjectionStatsSeasonRouteHandler,
  )
  .openapi(getFormatStartingLineupsByDateDateRoute, getFormatStartingLineupsByDateDateRouteHandler)

export default app
