import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bulkHandler,
  childrenHandler,
  infoHandler,
  lookupHandler,
  parentsHandler,
  sessionHandler,
  statsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bulkHandler)
  .route('/', childrenHandler)
  .route('/', infoHandler)
  .route('/', lookupHandler)
  .route('/', parentsHandler)
  .route('/', sessionHandler)
  .route('/', statsHandler)

export default app
