import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  apiKeysHandler,
  clustersHandler,
  defaultTemplatesHandler,
  eventsHandler,
  healthHandler,
  nodesHandler,
  sandboxesHandler,
  secretsHandler,
  snapshotsHandler,
  teamsHandler,
  templatesHandler,
  unstableHandler,
  v2Handler,
  v3Handler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', teamsHandler)
  .route('/', unstableHandler)
  .route('/', sandboxesHandler)
  .route('/', v2Handler)
  .route('/', snapshotsHandler)
  .route('/', v3Handler)
  .route('/', templatesHandler)
  .route('/', defaultTemplatesHandler)
  .route('/', nodesHandler)
  .route('/', adminHandler)
  .route('/', apiKeysHandler)
  .route('/', volumesHandler)
  .route('/', secretsHandler)
  .route('/', clustersHandler)
  .route('/', eventsHandler)

export default app
