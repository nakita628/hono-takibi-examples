import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesMediaRoute,
  getGamesPlayersRoute,
  getGamesRoute,
  getGamesTeamsRoute,
  getGamesWeatherRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
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
