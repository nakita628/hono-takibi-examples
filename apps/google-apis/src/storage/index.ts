import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bucketAccessControlsHandler,
  bucketsHandler,
  channelsHandler,
  defaultObjectAccessControlsHandler,
  notificationsHandler,
  objectAccessControlsHandler,
  objectsHandler,
  projectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bucketsHandler)
  .route('/', bucketAccessControlsHandler)
  .route('/', defaultObjectAccessControlsHandler)
  .route('/', notificationsHandler)
  .route('/', objectsHandler)
  .route('/', objectAccessControlsHandler)
  .route('/', channelsHandler)
  .route('/', projectsHandler)

export default app
