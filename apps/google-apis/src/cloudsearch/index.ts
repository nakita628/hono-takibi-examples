import { OpenAPIHono } from '@hono/zod-openapi'
import {
  debugHandler,
  indexingHandler,
  mediaHandler,
  operationsHandler,
  queryHandler,
  settingsHandler,
  statsHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', debugHandler)
  .route('/', indexingHandler)
  .route('/', mediaHandler)
  .route('/', queryHandler)
  .route('/', settingsHandler)
  .route('/', statsHandler)
  .route('/', operationsHandler)
  .route('/', v1Handler)

export default app
