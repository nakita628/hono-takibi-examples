import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  archivesHandler,
  brandingHandler,
  changeRequestsHandler,
  complianceHandler,
  cveHandler,
  datasourcesHandler,
  directivesHandler,
  groupsHandler,
  infoHandler,
  inventoriesHandler,
  methodsHandler,
  nodesHandler,
  parametersHandler,
  rulesHandler,
  scaleoutrelayHandler,
  secretHandler,
  settingsHandler,
  statusHandler,
  systemHandler,
  techniquesHandler,
  usermanagementHandler,
  usersHandler,
  validatedUsersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', archivesHandler)
  .route('/', brandingHandler)
  .route('/', changeRequestsHandler)
  .route('/', complianceHandler)
  .route('/', cveHandler)
  .route('/', datasourcesHandler)
  .route('/', directivesHandler)
  .route('/', groupsHandler)
  .route('/', infoHandler)
  .route('/', inventoriesHandler)
  .route('/', methodsHandler)
  .route('/', nodesHandler)
  .route('/', parametersHandler)
  .route('/', rulesHandler)
  .route('/', scaleoutrelayHandler)
  .route('/', secretHandler)
  .route('/', settingsHandler)
  .route('/', statusHandler)
  .route('/', systemHandler)
  .route('/', techniquesHandler)
  .route('/', usermanagementHandler)
  .route('/', usersHandler)
  .route('/', validatedUsersHandler)

export default app
