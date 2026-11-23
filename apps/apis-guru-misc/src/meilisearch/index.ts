import { OpenAPIHono } from '@hono/zod-openapi'
import {
  dumpsHandler,
  healthHandler,
  indexesHandler,
  keysHandler,
  statsHandler,
  tasksHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dumpsHandler)
  .route('/', healthHandler)
  .route('/', indexesHandler)
  .route('/', keysHandler)
  .route('/', statsHandler)
  .route('/', tasksHandler)
  .route('/', versionHandler)

export default app
