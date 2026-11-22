import { OpenAPIHono } from '@hono/zod-openapi'
import {
  groupsHandler,
  messagesHandler,
  miscHandler,
  photosHandler,
  postsHandler,
  storiesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', messagesHandler)
  .route('/', miscHandler)
  .route('/', groupsHandler)
  .route('/', photosHandler)
  .route('/', postsHandler)
  .route('/', storiesHandler)
  .route('/', usersHandler)

export default app
