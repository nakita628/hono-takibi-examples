import { OpenAPIHono } from '@hono/zod-openapi'
import {
  announcementsHandler,
  arrHandler,
  backupsHandler,
  databasesHandler,
  healthHandler,
  jobsHandler,
  openapiJsonHandler,
  statusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', arrHandler)
  .route('/', databasesHandler)
  .route('/', healthHandler)
  .route('/', statusHandler)
  .route('/', openapiJsonHandler)
  .route('/', jobsHandler)
  .route('/', backupsHandler)
  .route('/', announcementsHandler)

export default app
