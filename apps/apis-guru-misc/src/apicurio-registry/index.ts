import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  artifactRulesHandler,
  artifactsHandler,
  artifactTypeHandler,
  globalRulesHandler,
  groupsHandler,
  metadataHandler,
  searchHandler,
  systemHandler,
  usersHandler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', artifactTypeHandler)
  .route('/', adminHandler)
  .route('/', globalRulesHandler)
  .route('/', groupsHandler)
  .route('/', artifactsHandler)
  .route('/', metadataHandler)
  .route('/', artifactRulesHandler)
  .route('/', versionsHandler)
  .route('/', searchHandler)
  .route('/', systemHandler)
  .route('/', usersHandler)

export default app
