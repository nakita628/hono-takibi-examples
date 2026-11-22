import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  analysisHandler,
  boardHandler,
  botHandler,
  broadcastsHandler,
  bulkPairingsHandler,
  challengesHandler,
  externalEngineHandler,
  fideHandler,
  gamesHandler,
  messagingHandler,
  oAuthHandler,
  openingExplorerHandler,
  puzzlesHandler,
  relationsHandler,
  serverHandler,
  simulsHandler,
  studiesHandler,
  tablebaseHandler,
  teamsHandler,
  tournamentsArenaHandler,
  tournamentsSwissHandler,
  tvHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', usersHandler)
  .route('/', puzzlesHandler)
  .route('/', accountHandler)
  .route('/', gamesHandler)
  .route('/', serverHandler)
  .route('/', tvHandler)
  .route('/', tournamentsArenaHandler)
  .route('/', tournamentsSwissHandler)
  .route('/', teamsHandler)
  .route('/', studiesHandler)
  .route('/', broadcastsHandler)
  .route('/', fideHandler)
  .route('/', simulsHandler)
  .route('/', relationsHandler)
  .route('/', boardHandler)
  .route('/', botHandler)
  .route('/', challengesHandler)
  .route('/', bulkPairingsHandler)
  .route('/', messagingHandler)
  .route('/', analysisHandler)
  .route('/', externalEngineHandler)
  .route('/', oAuthHandler)
  .route('/', openingExplorerHandler)
  .route('/', tablebaseHandler)

export default app
