import { OpenAPIHono } from '@hono/zod-openapi'
import {
  incidentsHandler,
  leaguesHandler,
  matchesHandler,
  playersHandler,
  seriesHandler,
  teamsHandler,
  tournamentsHandler,
  videogamesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', incidentsHandler)
  .route('/', leaguesHandler)
  .route('/', matchesHandler)
  .route('/', playersHandler)
  .route('/', seriesHandler)
  .route('/', teamsHandler)
  .route('/', tournamentsHandler)
  .route('/', videogamesHandler)

export default app
