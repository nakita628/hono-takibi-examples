import { OpenAPIHono } from '@hono/zod-openapi'
import {
  blocksHandler,
  commentsHandler,
  databasesHandler,
  pagesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', blocksHandler)
  .route('/', commentsHandler)
  .route('/', databasesHandler)
  .route('/', pagesHandler)
  .route('/', usersHandler)

export default app
