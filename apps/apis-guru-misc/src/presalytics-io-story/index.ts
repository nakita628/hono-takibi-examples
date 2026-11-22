import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cacheHandler,
  conversationHandler,
  environmentHandler,
  eventsHandler,
  noTagsSpecHandler,
  permissionsHandler,
  restrictedHandler,
  schemasHandler,
  sessionsHandler,
  storyCollaboratorsHandler,
  storyHandler,
  viewsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', storyHandler)
  .route('/', cacheHandler)
  .route('/', restrictedHandler)
  .route('/', environmentHandler)
  .route('/', noTagsSpecHandler)
  .route('/', schemasHandler)
  .route('/', permissionsHandler)
  .route('/', sessionsHandler)
  .route('/', viewsHandler)
  .route('/', storyCollaboratorsHandler)
  .route('/', eventsHandler)
  .route('/', conversationHandler)

export default app
