import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  healthHandler,
  namespacesHandler,
  oplHandler,
  relationTuplesHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', healthHandler)
  .route('/', namespacesHandler)
  .route('/', oplHandler)
  .route('/', relationTuplesHandler)
  .route('/', versionHandler)

export default app
