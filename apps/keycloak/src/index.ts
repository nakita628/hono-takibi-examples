import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  attackDetectionHandler,
  authenticationManagementHandler,
  clientAttributeCertificateHandler,
  clientInitialAccessHandler,
  clientRegistrationPolicyHandler,
  clientRoleMappingsHandler,
  clientScopesHandler,
  clientsHandler,
  componentHandler,
  groupsHandler,
  identityProvidersHandler,
  keyHandler,
  organizationsHandler,
  protocolMappersHandler,
  realmsAdminHandler,
  roleMapperHandler,
  rolesByIDHandler,
  rolesHandler,
  scopeMappingsHandler,
  usersHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', realmsAdminHandler)
  .route('/', attackDetectionHandler)
  .route('/', authenticationManagementHandler)
  .route('/', clientRegistrationPolicyHandler)
  .route('/', clientScopesHandler)
  .route('/', protocolMappersHandler)
  .route('/', scopeMappingsHandler)
  .route('/', clientsHandler)
  .route('/', clientInitialAccessHandler)
  .route('/', adminHandler)
  .route('/', clientAttributeCertificateHandler)
  .route('/', rolesHandler)
  .route('/', componentHandler)
  .route('/', groupsHandler)
  .route('/', roleMapperHandler)
  .route('/', clientRoleMappingsHandler)
  .route('/', identityProvidersHandler)
  .route('/', keyHandler)
  .route('/', organizationsHandler)
  .route('/', rolesByIDHandler)
  .route('/', usersHandler)
  .route('/', workflowsHandler)

export default app
