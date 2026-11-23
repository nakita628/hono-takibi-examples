import { OpenAPIHono } from '@hono/zod-openapi'
import {
  batchesHandler,
  dumpsHandler,
  experimentalFeaturesHandler,
  healthHandler,
  indexesHandler,
  keysHandler,
  logsHandler,
  metricsHandler,
  multiSearchHandler,
  networkHandler,
  snapshotsHandler,
  statsHandler,
  swapIndexesHandler,
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
  .route('/', keysHandler)
  .route('/', logsHandler)
  .route('/', metricsHandler)
  .route('/', multiSearchHandler)
  .route('/', networkHandler)
  .route('/', snapshotsHandler)
  .route('/', statsHandler)
  .route('/', swapIndexesHandler)
  .route('/', tasksHandler)
  .route('/', versionHandler)

export default app
