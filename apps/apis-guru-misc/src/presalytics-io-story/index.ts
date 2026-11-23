import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  cacheHandler,
  collaboratorsHandler,
  environmentHandler,
  fileHandler,
  idHandler,
  noTagsSpecHandler,
  outlineSchemaHandler,
  permissionTypesHandler,
  sessionsHandler,
  viewsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', cacheHandler)
  .route('/', collaboratorsHandler)
  .route('/', environmentHandler)
  .route('/', fileHandler)
  .route('/', noTagsSpecHandler)
  .route('/', outlineSchemaHandler)
  .route('/', permissionTypesHandler)
  .route('/', sessionsHandler)
  .route('/', viewsHandler)
  .route('/', idHandler)

export default app
