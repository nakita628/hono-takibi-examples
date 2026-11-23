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
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseProjectionsByGameSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFantasyDefenseProjectionsBySeasonSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuredPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatUpcomingDfsSlateOwnershipProjectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
