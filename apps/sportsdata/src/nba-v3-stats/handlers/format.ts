import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllStarsSeasonRoute,
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatBoxScoreGameidRoute,
  getFormatBoxScoresDateRoute,
  getFormatBoxScoresDeltaDateMinutesRoute,
  getFormatCurrentSeasonRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatFreeAgentsRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
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
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
  getFormatTeamStatsAllowedByPositionSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatAllStarsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAllTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatFreeAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatGamesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatNewsByPlayerIDPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerPlayeridRoute, (c) => {
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
  .openapi(getFormatStandingsSeasonRoute, (c) => {
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
  .openapi(getFormatTeamStatsAllowedByPositionSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
