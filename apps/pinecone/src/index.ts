import { OpenAPIHono } from '@hono/zod-openapi'
import { backupsHandler, collectionsHandler, indexesHandler, restoreJobsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', indexesHandler)
  .route('/', collectionsHandler)
  .route('/', backupsHandler)
  .route('/', restoreJobsHandler)

export default app
