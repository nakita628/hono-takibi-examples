import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  analysesHandler,
  codereviewsHandler,
  issuesHandler,
  openapiHandler,
  operationsHandler,
  projectsHandler,
  queryjobsHandler,
  snapshotsHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', analysesHandler)
  .route('/', codereviewsHandler)
  .route('/', issuesHandler)
  .route('/', openapiHandler)
  .route('/', operationsHandler)
  .route('/', projectsHandler)
  .route('/', queryjobsHandler)
  .route('/', snapshotsHandler)
  .route('/', systemHandler)

export default app
