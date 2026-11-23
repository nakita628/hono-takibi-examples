import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatDfsSlatesByWeekSeasonWeekRoute,
  getFormatFantasyDefenseProjectionsByGameSeasonWeekRoute,
  getFormatFantasyDefenseProjectionsBySeasonSeasonRoute,
  getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute,
  getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute,
  getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute,
  getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute,
  getFormatPlayerGameProjectionStatsByWeekSeasonWeekRoute,
  getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRoute,
  getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonProjectionStatsSeasonRoute,
  getFormatUpcomingDfsSlateOwnershipProjectionsRoute,
} from './routes'
import {
  getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRouteHandler,
  getFormatDfsSlatesByDateDateRouteHandler,
  getFormatDfsSlatesByWeekSeasonWeekRouteHandler,
  getFormatFantasyDefenseProjectionsByGameSeasonWeekRouteHandler,
  getFormatFantasyDefenseProjectionsBySeasonSeasonRouteHandler,
  getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRouteHandler,
  getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRouteHandler,
  getFormatInjuredPlayersRouteHandler,
  getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRouteHandler,
  getFormatPlayerGameProjectionStatsByWeekSeasonWeekRouteHandler,
  getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRouteHandler,
  getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRouteHandler,
  getFormatPlayerSeasonProjectionStatsSeasonRouteHandler,
  getFormatUpcomingDfsSlateOwnershipProjectionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRoute,
    getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRouteHandler,
  )
  .openapi(getFormatDfsSlatesByDateDateRoute, getFormatDfsSlatesByDateDateRouteHandler)
  .openapi(getFormatDfsSlatesByWeekSeasonWeekRoute, getFormatDfsSlatesByWeekSeasonWeekRouteHandler)
  .openapi(
    getFormatFantasyDefenseProjectionsByGameSeasonWeekRoute,
    getFormatFantasyDefenseProjectionsByGameSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatFantasyDefenseProjectionsBySeasonSeasonRoute,
    getFormatFantasyDefenseProjectionsBySeasonSeasonRouteHandler,
  )
  .openapi(
    getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute,
    getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  )
  .openapi(
    getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute,
    getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRouteHandler,
  )
  .openapi(
    getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRoute,
    getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRouteHandler,
  )
  .openapi(getFormatInjuredPlayersRoute, getFormatInjuredPlayersRouteHandler)
  .openapi(
    getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute,
    getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute,
    getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRouteHandler,
  )
  .openapi(
    getFormatPlayerGameProjectionStatsByWeekSeasonWeekRoute,
    getFormatPlayerGameProjectionStatsByWeekSeasonWeekRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonProjectionStatsSeasonRoute,
    getFormatPlayerSeasonProjectionStatsSeasonRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRoute,
    getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRouteHandler,
  )
  .openapi(
    getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute,
    getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRouteHandler,
  )
  .openapi(
    getFormatUpcomingDfsSlateOwnershipProjectionsRoute,
    getFormatUpcomingDfsSlateOwnershipProjectionsRouteHandler,
  )

export default app
