import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentHandler,
  alertsHandler,
  authenticationHandler,
  badgesHandler,
  chartsHandler,
  claimingHandler,
  configHandler,
  contextsHandler,
  dataHandler,
  dyncfgHandler,
  functionsHandler,
  managementHandler,
  nodesHandler,
  registryHandler,
  settingsHandler,
  streamingHandler,
  variablesHandler,
  versionsHandler,
  webrtcHandler,
  weightsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', nodesHandler)
  .route('/', contextsHandler)
  .route('/', chartsHandler)
  .route('/', dyncfgHandler)
  .route('/', dataHandler)
  .route('/', badgesHandler)
  .route('/', alertsHandler)
  .route('/', variablesHandler)
  .route('/', versionsHandler)
  .route('/', functionsHandler)
  .route('/', configHandler)
  .route('/', settingsHandler)
  .route('/', streamingHandler)
  .route('/', webrtcHandler)
  .route('/', claimingHandler)
  .route('/', authenticationHandler)
  .route('/', weightsHandler)
  .route('/', agentHandler)
  .route('/', managementHandler)
  .route('/', registryHandler)

export default app
