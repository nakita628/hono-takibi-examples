import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAreAnyGamesInProgressRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresDateRoute,
  getFormatBoxScoresDeltaDateMinutesRoute,
  getFormatCurrentSeasonRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatInjuredPlayersRoute,
  getFormatLeagueHierarchyRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatPlayerGameStatsByDateDateRoute,
  getFormatPlayerGameStatsByPlayerDatePlayeridRoute,
  getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute,
  getFormatPlayerSeasonStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTournamentSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatAreAnyGamesInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoreGameidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatBoxScoresDeltaDateMinutesRoute, (c) => {
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
  .openapi(getFormatPlayerGameProjectionStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsByPlayerDatePlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonStatsByTeamSeasonTeamRoute, (c) => {
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
  .openapi(getFormatTeamSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTournamentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
