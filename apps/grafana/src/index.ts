import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessControlHandler,
  adminHandler,
  annotationsHandler,
  anonymousHandler,
  cloudmigrationHandler,
  convertHandler,
  dashboardHandler,
  dashboardsHandler,
  datasourcesHandler,
  dsHandler,
  foldersHandler,
  healthHandler,
  libraryElementsHandler,
  licensingHandler,
  logoutHandler,
  orgHandler,
  orgsHandler,
  playlistsHandler,
  publicHandler,
  queryHistoryHandler,
  recordingRulesHandler,
  reportsHandler,
  samlHandler,
  searchHandler,
  serviceaccountsHandler,
  signingKeysHandler,
  snapshotHandler,
  snapshotsDeleteHandler,
  snapshotsHandler,
  teamsHandler,
  userHandler,
  usersHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessControlHandler)
  .route('/', adminHandler)
  .route('/', annotationsHandler)
  .route('/', anonymousHandler)
  .route('/', cloudmigrationHandler)
  .route('/', convertHandler)
  .route('/', dashboardHandler)
  .route('/', dashboardsHandler)
  .route('/', datasourcesHandler)
  .route('/', dsHandler)
  .route('/', foldersHandler)
  .route('/', healthHandler)
  .route('/', libraryElementsHandler)
  .route('/', licensingHandler)
  .route('/', logoutHandler)
  .route('/', orgHandler)
  .route('/', orgsHandler)
  .route('/', playlistsHandler)
  .route('/', publicHandler)
  .route('/', queryHistoryHandler)
  .route('/', recordingRulesHandler)
  .route('/', reportsHandler)
  .route('/', samlHandler)
  .route('/', searchHandler)
  .route('/', serviceaccountsHandler)
  .route('/', signingKeysHandler)
  .route('/', snapshotHandler)
  .route('/', snapshotsHandler)
  .route('/', snapshotsDeleteHandler)
  .route('/', teamsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', v1Handler)

export default app
