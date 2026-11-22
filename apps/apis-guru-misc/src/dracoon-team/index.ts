import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  configHandler,
  downloadsHandler,
  eventlogHandler,
  groupsHandler,
  internalHandler,
  nodesHandler,
  provisioningHandler,
  publicHandler,
  resourcesHandler,
  rolesHandler,
  settingsHandler,
  sharesHandler,
  systemAuthConfigHandler,
  systemPoliciesConfigHandler,
  systemSettingsConfigHandler,
  systemStorageConfigHandler,
  uploadsHandler,
  userHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', configHandler)
  .route('/', downloadsHandler)
  .route('/', eventlogHandler)
  .route('/', groupsHandler)
  .route('/', internalHandler)
  .route('/', nodesHandler)
  .route('/', provisioningHandler)
  .route('/', publicHandler)
  .route('/', resourcesHandler)
  .route('/', rolesHandler)
  .route('/', settingsHandler)
  .route('/', sharesHandler)
  .route('/', systemAuthConfigHandler)
  .route('/', systemPoliciesConfigHandler)
  .route('/', systemSettingsConfigHandler)
  .route('/', systemStorageConfigHandler)
  .route('/', uploadsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)

export default app
