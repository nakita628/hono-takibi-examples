import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCalendarRoute,
  getGameBoxAdvancedRoute,
  getGamesMediaRoute,
  getGamesPlayersRoute,
  getGamesRoute,
  getGamesTeamsRoute,
  getGamesWeatherRoute,
  getRecordsRoute,
  getScoreboardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGameBoxAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesWeatherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScoreboardRoute, (c) => {
    throw new Error('Not implemented')
  })
