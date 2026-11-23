import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  aliasesHandler,
  clusterHandler,
  collectionsHandler,
  healthzHandler,
  issuesHandler,
  livezHandler,
  metricsHandler,
  quotasHandler,
  readyzHandler,
  snapshotsHandler,
  telemetryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', __rootHandler)
  .route('/', telemetryHandler)
  .route('/', metricsHandler)
  .route('/', healthzHandler)
  .route('/', livezHandler)
  .route('/', readyzHandler)
  .route('/', issuesHandler)
  .route('/', clusterHandler)
  .route('/', quotasHandler)
  .route('/', aliasesHandler)
  .route('/', snapshotsHandler)

export default app
