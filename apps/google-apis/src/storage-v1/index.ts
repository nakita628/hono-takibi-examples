import { OpenAPIHono } from '@hono/zod-openapi'
import {
  anywhereCachesHandler,
  bucketAccessControlsHandler,
  bucketsHandler,
  channelsHandler,
  defaultObjectAccessControlsHandler,
  foldersHandler,
  managedFoldersHandler,
  notificationsHandler,
  objectAccessControlsHandler,
  objectsHandler,
  operationsHandler,
  projectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bucketsHandler)
  .route('/', bucketAccessControlsHandler)
  .route('/', anywhereCachesHandler)
  .route('/', defaultObjectAccessControlsHandler)
  .route('/', foldersHandler)
  .route('/', managedFoldersHandler)
  .route('/', notificationsHandler)
  .route('/', objectsHandler)
  .route('/', objectAccessControlsHandler)
  .route('/', operationsHandler)
  .route('/', channelsHandler)
  .route('/', projectsHandler)

export default app
