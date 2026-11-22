import { OpenAPIHono } from '@hono/zod-openapi'
import {
  driveGroupsHandler,
  drivesHandler,
  filesHandler,
  foldersHandler,
  sharedLinksHandler,
  uploadSessionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', driveGroupsHandler)
  .route('/', drivesHandler)
  .route('/', filesHandler)
  .route('/', foldersHandler)
  .route('/', sharedLinksHandler)
  .route('/', uploadSessionsHandler)

export default app
