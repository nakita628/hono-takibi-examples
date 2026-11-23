import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAreAnyGamesInProgressRoute,
  getFormatCurrentSeasonDetailsRoute,
  getFormatCurrentSeasonRoute,
  getFormatCurrentSeasonTypeRoute,
  getFormatCurrentWeekRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesByWeekSeasonWeekRoute,
  getFormatGamesSeasonRoute,
  getFormatInjuredPlayersRoute,
  getFormatLeagueHierarchyRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamGameStatsByWeekSeasonWeekRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatAreAnyGamesInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuredPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatLeagueHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStadiumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsByWeekSeasonWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
