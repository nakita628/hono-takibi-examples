import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aboutHandler,
  appsHandler,
  changesHandler,
  channelsHandler,
  commentsHandler,
  drivesHandler,
  filesHandler,
  permissionsHandler,
  repliesHandler,
  revisionsHandler,
  teamdrivesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aboutHandler)
  .route('/', appsHandler)
  .route('/', changesHandler)
  .route('/', channelsHandler)
  .route('/', drivesHandler)
  .route('/', filesHandler)
  .route('/', commentsHandler)
  .route('/', repliesHandler)
  .route('/', permissionsHandler)
  .route('/', revisionsHandler)
  .route('/', teamdrivesHandler)

export default app
