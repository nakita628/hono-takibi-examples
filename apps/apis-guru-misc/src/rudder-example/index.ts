import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiInfoHandler,
  archivesHandler,
  brandingHandler,
  changeRequestsHandler,
  complianceHandler,
  cveHandler,
  dataSourcesHandler,
  directivesHandler,
  groupsHandler,
  inventoriesHandler,
  nodesHandler,
  parametersHandler,
  rulesHandler,
  scaleOutRelayHandler,
  secretManagementHandler,
  settingsHandler,
  statusHandler,
  systemHandler,
  techniquesHandler,
  userManagementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', changeRequestsHandler)
  .route('/', archivesHandler)
  .route('/', brandingHandler)
  .route('/', complianceHandler)
  .route('/', cveHandler)
  .route('/', dataSourcesHandler)
  .route('/', directivesHandler)
  .route('/', groupsHandler)
  .route('/', apiInfoHandler)
  .route('/', inventoriesHandler)
  .route('/', techniquesHandler)
  .route('/', nodesHandler)
  .route('/', parametersHandler)
  .route('/', rulesHandler)
  .route('/', scaleOutRelayHandler)
  .route('/', secretManagementHandler)
  .route('/', settingsHandler)
  .route('/', statusHandler)
  .route('/', systemHandler)
  .route('/', userManagementHandler)

export default app
