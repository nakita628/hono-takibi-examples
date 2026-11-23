import { OpenAPIHono } from '@hono/zod-openapi'
import {
  collectionsHandler,
  describeIndexStatsHandler,
  indexesHandler,
  queryHandler,
  vectorsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', describeIndexStatsHandler)
  .route('/', indexesHandler)
  .route('/', queryHandler)
  .route('/', vectorsHandler)

export default app
