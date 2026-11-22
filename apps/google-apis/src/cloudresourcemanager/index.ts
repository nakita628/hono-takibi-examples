import { OpenAPIHono } from '@hono/zod-openapi'
import {
  effectiveTagsHandler,
  foldersHandler,
  liensHandler,
  organizationsHandler,
  projectsHandler,
  tagBindingsHandler,
  tagKeysHandler,
  tagValuesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', effectiveTagsHandler)
  .route('/', foldersHandler)
  .route('/', liensHandler)
  .route('/', organizationsHandler)
  .route('/', projectsHandler)
  .route('/', tagBindingsHandler)
  .route('/', tagKeysHandler)
  .route('/', tagValuesHandler)

export default app
