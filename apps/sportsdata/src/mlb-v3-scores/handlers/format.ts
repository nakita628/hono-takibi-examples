import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatAllTeamsRoute,
  getFormatAreAnyGamesInProgressRoute,
  getFormatCurrentSeasonRoute,
  getFormatFreeAgentsRoute,
  getFormatGamesByDateDateRoute,
  getFormatGamesSeasonRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayersRoute,
  getFormatPlayersTeamRoute,
  getFormatStadiumsRoute,
  getFormatStandingsSeasonRoute,
  getFormatTeamGameStatsByDateDateRoute,
  getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute,
  getFormatTeamSeasonStatsSeasonRoute,
  getFormatTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatAllTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatAreAnyGamesInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatCurrentSeasonRoute, (c) => {
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
  .openapi(getFormatTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
