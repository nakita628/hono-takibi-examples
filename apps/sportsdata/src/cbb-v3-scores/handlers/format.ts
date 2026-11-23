import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAreAnyGamesInProgressRoute,
  getFormatCurrentSeasonRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatInjuredPlayersRoute,
  getFormatLeagueHierarchyRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamScheduleSeasonTeamRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTournamentSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatAreAnyGamesInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesByDateDateRoute, (c) => {
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
  .openapi(getFormatTeamGameStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamScheduleSeasonTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTournamentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
