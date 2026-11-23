import { OpenAPIHono } from '@hono/zod-openapi'
import {
  benchmarksHandler,
  constantsHandler,
  distributionsHandler,
  explorerHandler,
  findMatchesHandler,
  healthHandler,
  heroesHandler,
  heroStatsHandler,
  leaguesHandler,
  liveHandler,
  matchesHandler,
  metadataHandler,
  parsedMatchesHandler,
  playersHandler,
  proMatchesHandler,
  proPlayersHandler,
  publicMatchesHandler,
  rankingsHandler,
  recordsHandler,
  requestHandler,
  scenariosHandler,
  schemaHandler,
  searchHandler,
  teamsHandler,
  topPlayersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', matchesHandler)
  .route('/', playersHandler)
  .route('/', topPlayersHandler)
  .route('/', proPlayersHandler)
  .route('/', proMatchesHandler)
  .route('/', publicMatchesHandler)
  .route('/', parsedMatchesHandler)
  .route('/', explorerHandler)
  .route('/', metadataHandler)
  .route('/', distributionsHandler)
  .route('/', searchHandler)
  .route('/', rankingsHandler)
  .route('/', benchmarksHandler)
  .route('/', healthHandler)
  .route('/', requestHandler)
  .route('/', findMatchesHandler)
  .route('/', heroesHandler)
  .route('/', heroStatsHandler)
  .route('/', leaguesHandler)
  .route('/', teamsHandler)
  .route('/', recordsHandler)
  .route('/', liveHandler)
  .route('/', scenariosHandler)
  .route('/', schemaHandler)
  .route('/', constantsHandler)

export default app
