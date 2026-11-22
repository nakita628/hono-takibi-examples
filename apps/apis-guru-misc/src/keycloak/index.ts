import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  protocolMappersHandler,
  realmsAdminHandler,
  roleMapperHandler,
  rolesByIDHandler,
  rolesHandler,
  rootHandler,
  scopeMappingsHandler,
  usersHandler,
  userStorageProviderHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', rootHandler)
  .route('/', realmsAdminHandler)
  .route('/', userStorageProviderHandler)
  .route('/', attackDetectionHandler)
  .route('/', authenticationManagementHandler)
  .route('/', clientRegistrationPolicyHandler)
  .route('/', clientScopesHandler)
  .route('/', protocolMappersHandler)
  .route('/', scopeMappingsHandler)
  .route('/', clientsHandler)
  .route('/', clientInitialAccessHandler)
  .route('/', clientAttributeCertificateHandler)
  .route('/', rolesHandler)
  .route('/', componentHandler)
  .route('/', groupsHandler)
  .route('/', roleMapperHandler)
  .route('/', clientRoleMappingsHandler)
  .route('/', identityProvidersHandler)
  .route('/', keyHandler)
  .route('/', rolesByIDHandler)
  .route('/', usersHandler)

export default app
