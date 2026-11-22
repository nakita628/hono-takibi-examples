import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  certificateAuthorityHandler,
  hostFactoryHandler,
  policiesHandler,
  publicKeysHandler,
  resourcesHandler,
  rolesHandler,
  secretsHandler,
  statusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statusHandler)
  .route('/', authenticationHandler)
  .route('/', certificateAuthorityHandler)
  .route('/', hostFactoryHandler)
  .route('/', policiesHandler)
  .route('/', publicKeysHandler)
  .route('/', resourcesHandler)
  .route('/', rolesHandler)
  .route('/', secretsHandler)

export default app
