import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersCompetitionRoute,
  getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute,
} from './routes'
import {
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatInjuredPlayersCompetitionRouteHandler,
  getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRouteHandler,
  getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatInjuredPlayersCompetitionRoute, getFormatInjuredPlayersCompetitionRouteHandler)
  .openapi(
    getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRoute,
    getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByDateDateRoute,
    getFormatPlayerGameProjectionStatsByDateDateRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
    getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler,
  )
  .openapi(
    getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute,
    getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRouteHandler,
  )

export default app
