import { OpenAPIHono } from '@hono/zod-openapi'
import {
  conversationsHandler,
  feedbackHandler,
  groupsHandler,
  photosHandler,
  postsHandler,
  storiesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationsHandler)
  .route('/', feedbackHandler)
  .route('/', groupsHandler)
  .route('/', photosHandler)
  .route('/', postsHandler)
  .route('/', storiesHandler)
  .route('/', usersHandler)

export default app
