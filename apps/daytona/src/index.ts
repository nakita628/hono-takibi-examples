import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  apiKeysHandler,
  auditHandler,
  configHandler,
  dockerRegistryHandler,
  healthHandler,
  jobsHandler,
  objectStorageHandler,
  organizationsHandler,
  previewHandler,
  regionsHandler,
  runnersHandler,
  sandboxHandler,
  snapshotsHandler,
  toolboxHandler,
  usersHandler,
  volumesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configHandler)
  .route('/', apiKeysHandler)
  .route('/', organizationsHandler)
  .route('/', usersHandler)
  .route('/', regionsHandler)
  .route('/', sandboxHandler)
  .route('/', runnersHandler)
  .route('/', toolboxHandler)
  .route('/', snapshotsHandler)
  .route('/', previewHandler)
  .route('/', volumesHandler)
  .route('/', jobsHandler)
  .route('/', dockerRegistryHandler)
  .route('/', adminHandler)
  .route('/', webhooksHandler)
  .route('/', auditHandler)
  .route('/', objectStorageHandler)
  .route('/', healthHandler)

export default app
