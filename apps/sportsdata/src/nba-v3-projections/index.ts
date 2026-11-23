import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDepthChartsRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRoute,
  getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonProjectionStatsSeasonRoute,
  getFormatStartingLineupsByDateDateRoute,
} from './routes'
import {
  getFormatDepthChartsRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRouteHandler,
  getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRouteHandler,
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
  .openapi(
    getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRoute,
    getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute,
    getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRouteHandler,
  )
  .openapi(getFormatStartingLineupsByDateDateRoute, getFormatStartingLineupsByDateDateRouteHandler)

export default app
