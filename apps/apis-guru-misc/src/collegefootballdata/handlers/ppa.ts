import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPpaGamesRoute,
  getPpaPlayersGamesRoute,
  getPpaPlayersSeasonRoute,
  getPpaPredictedRoute,
  getPpaTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppaHandler = app
  .openapi(getPpaGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPpaPlayersGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPpaPlayersSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPpaPredictedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPpaTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
