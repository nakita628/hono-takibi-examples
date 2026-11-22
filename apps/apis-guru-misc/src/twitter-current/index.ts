import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bookmarksHandler,
  complianceHandler,
  directMessagesHandler,
  generalHandler,
  listsHandler,
  spacesHandler,
  tweetsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', complianceHandler)
  .route('/', directMessagesHandler)
  .route('/', listsHandler)
  .route('/', usersHandler)
  .route('/', tweetsHandler)
  .route('/', generalHandler)
  .route('/', spacesHandler)
  .route('/', bookmarksHandler)

export default app
