import { OpenAPIHono } from '@hono/zod-openapi'
import {
  batchesHandler,
  documentsHandler,
  dumpsHandler,
  experimentalFeaturesHandler,
  facetSearchHandler,
  healthHandler,
  indexesHandler,
  keysHandler,
  logsHandler,
  multiSearchHandler,
  networkHandler,
  settingsHandler,
  similarDocumentsHandler,
  snapshotsHandler,
  statsHandler,
  tasksHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', batchesHandler)
  .route('/', dumpsHandler)
  .route('/', experimentalFeaturesHandler)
  .route('/', healthHandler)
  .route('/', indexesHandler)
  .route('/', documentsHandler)
  .route('/', facetSearchHandler)
  .route('/', settingsHandler)
  .route('/', similarDocumentsHandler)
  .route('/', statsHandler)
  .route('/', keysHandler)
  .route('/', logsHandler)
  .route('/', multiSearchHandler)
  .route('/', networkHandler)
  .route('/', snapshotsHandler)
  .route('/', tasksHandler)
  .route('/', versionHandler)

export default app
