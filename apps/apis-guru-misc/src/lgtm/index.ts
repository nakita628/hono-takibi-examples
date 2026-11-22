import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analysesHandler,
  apiRootHandler,
  codeReviewsHandler,
  issuesHandler,
  operationsHandler,
  projectsHandler,
  queryJobsHandler,
  snapshotsHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiRootHandler)
  .route('/', analysesHandler)
  .route('/', codeReviewsHandler)
  .route('/', issuesHandler)
  .route('/', operationsHandler)
  .route('/', projectsHandler)
  .route('/', queryJobsHandler)
  .route('/', snapshotsHandler)
  .route('/', systemHandler)

export default app
