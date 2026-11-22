import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  apiKeysHandler,
  authHandler,
  eventsHandler,
  healthHandler,
  sandboxesHandler,
  secretsHandler,
  snapshotsHandler,
  tagsHandler,
  templatesHandler,
  unstableHandler,
  volumesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', authHandler)
  .route('/', sandboxesHandler)
  .route('/', snapshotsHandler)
  .route('/', templatesHandler)
  .route('/', unstableHandler)
  .route('/', tagsHandler)
  .route('/', adminHandler)
  .route('/', apiKeysHandler)
  .route('/', volumesHandler)
  .route('/', secretsHandler)
  .route('/', eventsHandler)
  .route('/', webhooksHandler)

export default app
