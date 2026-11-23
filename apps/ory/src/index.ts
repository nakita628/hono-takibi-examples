import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  healthHandler,
  schemasHandler,
  selfServiceHandler,
  sessionsHandler,
  versionHandler,
  wellKnownHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', wellKnownHandler)
  .route('/', adminHandler)
  .route('/', healthHandler)
  .route('/', schemasHandler)
  .route('/', selfServiceHandler)
  .route('/', sessionsHandler)
  .route('/', versionHandler)

export default app
