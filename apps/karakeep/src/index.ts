import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  assetsHandler,
  backupsHandler,
  bookmarksHandler,
  feedsHandler,
  highlightsHandler,
  listsHandler,
  tagsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bookmarksHandler)
  .route('/', listsHandler)
  .route('/', tagsHandler)
  .route('/', highlightsHandler)
  .route('/', usersHandler)
  .route('/', assetsHandler)
  .route('/', adminHandler)
  .route('/', backupsHandler)
  .route('/', feedsHandler)

export default app
