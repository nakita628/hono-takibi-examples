import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  backupHandler,
  customTemplatesHandler,
  dockerHandler,
  edgeAgentHandler,
  edgeGroupsHandler,
  edgeJobsHandler,
  edgeStacksHandler,
  endpointGroupsHandler,
  endpointsHandler,
  gitopsHandler,
  helmHandler,
  kubernetesHandler,
  ldapHandler,
  motdHandler,
  registriesHandler,
  resourceControlsHandler,
  rolesHandler,
  settingsHandler,
  sslHandler,
  stacksHandler,
  statusHandler,
  systemHandler,
  tagsHandler,
  teamMembershipsHandler,
  teamsHandler,
  templatesHandler,
  uploadHandler,
  usersHandler,
  webhooksHandler,
  websocketHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', backupHandler)
  .route('/', customTemplatesHandler)
  .route('/', dockerHandler)
  .route('/', edgeGroupsHandler)
  .route('/', edgeJobsHandler)
  .route('/', edgeStacksHandler)
  .route('/', endpointGroupsHandler)
  .route('/', endpointsHandler)
  .route('/', edgeAgentHandler)
  .route('/', helmHandler)
  .route('/', gitopsHandler)
  .route('/', kubernetesHandler)
  .route('/', ldapHandler)
  .route('/', motdHandler)
  .route('/', registriesHandler)
  .route('/', resourceControlsHandler)
  .route('/', rolesHandler)
  .route('/', settingsHandler)
  .route('/', sslHandler)
  .route('/', stacksHandler)
  .route('/', statusHandler)
  .route('/', systemHandler)
  .route('/', tagsHandler)
  .route('/', teamMembershipsHandler)
  .route('/', teamsHandler)
  .route('/', templatesHandler)
  .route('/', uploadHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', websocketHandler)

export default app
