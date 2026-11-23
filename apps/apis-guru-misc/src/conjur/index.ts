import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticatorHandler,
  authenticatorsHandler,
  authnAzureHandler,
  authnGcpHandler,
  authnHandler,
  authnIamHandler,
  authnJwtHandler,
  authnK8sHandler,
  authnLdapHandler,
  authnOidcHandler,
  caHandler,
  healthHandler,
  hostFactoriesHandler,
  hostFactoryTokensHandler,
  infoHandler,
  policiesHandler,
  publicKeysHandler,
  remoteHealthHandler,
  resourcesHandler,
  rolesHandler,
  secretsHandler,
  whoamiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticatorsHandler)
  .route('/', authnAzureHandler)
  .route('/', authnGcpHandler)
  .route('/', authnIamHandler)
  .route('/', authnJwtHandler)
  .route('/', authnK8sHandler)
  .route('/', authnLdapHandler)
  .route('/', authnOidcHandler)
  .route('/', authnHandler)
  .route('/', caHandler)
  .route('/', healthHandler)
  .route('/', hostFactoriesHandler)
  .route('/', hostFactoryTokensHandler)
  .route('/', infoHandler)
  .route('/', policiesHandler)
  .route('/', publicKeysHandler)
  .route('/', remoteHealthHandler)
  .route('/', resourcesHandler)
  .route('/', rolesHandler)
  .route('/', secretsHandler)
  .route('/', whoamiHandler)
  .route('/', authenticatorHandler)

export default app
