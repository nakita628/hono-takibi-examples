import { OpenAPIHono } from '@hono/zod-openapi'
import {
  announcementsHandler,
  arrHandler,
  backupsHandler,
  databasesHandler,
  jobsHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', arrHandler)
  .route('/', databasesHandler)
  .route('/', systemHandler)
  .route('/', jobsHandler)
  .route('/', backupsHandler)
  .route('/', announcementsHandler)

export default app
