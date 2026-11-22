import { OpenAPIHono } from '@hono/zod-openapi'
import {
  documentsHandler,
  dumpsHandler,
  indexesHandler,
  keyManagementHandler,
  searchHandler,
  settingsHandler,
  statsHandler,
  tasksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dumpsHandler)
  .route('/', statsHandler)
  .route('/', indexesHandler)
  .route('/', documentsHandler)
  .route('/', searchHandler)
  .route('/', settingsHandler)
  .route('/', keyManagementHandler)
  .route('/', tasksHandler)

export default app
