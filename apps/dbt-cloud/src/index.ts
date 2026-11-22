import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adapterSchemaHandler,
  adaptersHandler,
  auditLogsHandler,
  connectionsHandler,
  credentialsHandler,
  environmentsHandler,
  environmentVariablesHandler,
  extendedAttributesHandler,
  favoriteAssetsHandler,
  groupsHandler,
  invitesHandler,
  ipRestrictionEndpointsHandler,
  licenseMapsHandler,
  lineageIntegrationsHandler,
  mantleMigrationHandler,
  migrationInventoryHandler,
  oAuthConfigurationsHandler,
  privateEndpointsHandler,
  profilesHandler,
  projectsHandler,
  projectsManagedRepositoriesHandler,
  repositoriesHandler,
  scimEndpointsHandler,
  semanticLayerCredentialsHandler,
  serviceTokensHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', groupsHandler)
  .route('/', auditLogsHandler)
  .route('/', connectionsHandler)
  .route('/', environmentsHandler)
  .route('/', favoriteAssetsHandler)
  .route('/', invitesHandler)
  .route('/', ipRestrictionEndpointsHandler)
  .route('/', licenseMapsHandler)
  .route('/', mantleMigrationHandler)
  .route('/', migrationInventoryHandler)
  .route('/', oAuthConfigurationsHandler)
  .route('/', privateEndpointsHandler)
  .route('/', projectsHandler)
  .route('/', adaptersHandler)
  .route('/', credentialsHandler)
  .route('/', environmentVariablesHandler)
  .route('/', extendedAttributesHandler)
  .route('/', lineageIntegrationsHandler)
  .route('/', repositoriesHandler)
  .route('/', projectsManagedRepositoriesHandler)
  .route('/', profilesHandler)
  .route('/', scimEndpointsHandler)
  .route('/', semanticLayerCredentialsHandler)
  .route('/', serviceTokensHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', adapterSchemaHandler)

export default app
