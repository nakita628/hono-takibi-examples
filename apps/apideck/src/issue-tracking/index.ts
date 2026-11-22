import { OpenAPIHono } from '@hono/zod-openapi'
import {
  collectionsHandler,
  commentsHandler,
  tagsHandler,
  ticketsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionsHandler)
  .route('/', tagsHandler)
  .route('/', ticketsHandler)
  .route('/', commentsHandler)
  .route('/', usersHandler)

export default app
