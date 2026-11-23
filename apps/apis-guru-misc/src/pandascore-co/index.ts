import { OpenAPIHono } from '@hono/zod-openapi'
import {
  additionsHandler,
  changesHandler,
  deletionsHandler,
  incidentsHandler,
  leaguesHandler,
  livesHandler,
  matchesHandler,
  playersHandler,
  seriesHandler,
  teamsHandler,
  tournamentsHandler,
  videogamesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', additionsHandler)
  .route('/', changesHandler)
  .route('/', deletionsHandler)
  .route('/', incidentsHandler)
  .route('/', leaguesHandler)
  .route('/', livesHandler)
  .route('/', matchesHandler)
  .route('/', playersHandler)
  .route('/', seriesHandler)
  .route('/', teamsHandler)
  .route('/', tournamentsHandler)
  .route('/', videogamesHandler)

export default app
