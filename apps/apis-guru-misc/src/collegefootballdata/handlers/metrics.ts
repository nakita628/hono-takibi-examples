import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsWpPregameRoute,
  getMetricsWpRoute,
  getPpaGamesRoute,
  getPpaPlayersGamesRoute,
  getPpaPlayersSeasonRoute,
  getPpaPredictedRoute,
  getPpaTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsWpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWpPregameRoute, (c) => {
    throw new Error('Not implemented')
  })
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
