import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatCurrentSeasonRoute,
  getFormatDfsSlatesByTournamentTournamentidRoute,
  getFormatInjuriesByHistoricalRoute,
  getFormatInjuriesRoute,
  getFormatLeaderboardTournamentidRoute,
  getFormatNewsByDateDateRoute,
  getFormatNewsByPlayerIDPlayeridRoute,
  getFormatNewsRoute,
  getFormatPlayerPlayeridRoute,
  getFormatPlayerSeasonStatsSeasonRoute,
  getFormatPlayersRoute,
  getFormatPlayerTournamentProjectionStatsTournamentidRoute,
  getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRoute,
  getFormatTournamentsRoute,
  getFormatTournamentsSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatCurrentSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByTournamentTournamentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuriesByHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatLeaderboardTournamentidRoute, (c) => {
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
  .openapi(getFormatPlayerSeasonStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerTournamentProjectionStatsTournamentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatTournamentsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
