import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aliasesHandler,
  betaHandler,
  collectionsHandler,
  distributedHandler,
  indexesHandler,
  pointsHandler,
  quotasHandler,
  searchHandler,
  serviceHandler,
  snapshotsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', distributedHandler)
  .route('/', serviceHandler)
  .route('/', betaHandler)
  .route('/', quotasHandler)
  .route('/', collectionsHandler)
  .route('/', aliasesHandler)
  .route('/', indexesHandler)
  .route('/', snapshotsHandler)
  .route('/', pointsHandler)
  .route('/', searchHandler)

export default app
