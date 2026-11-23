import { OpenAPIHono } from '@hono/zod-openapi'
import {
  classesHandler,
  collectionsHandler,
  groupsHandler,
  meHandler,
  organizationsHandler,
  scoresHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', classesHandler)
  .route('/', collectionsHandler)
  .route('/', groupsHandler)
  .route('/', meHandler)
  .route('/', organizationsHandler)
  .route('/', scoresHandler)
  .route('/', usersHandler)

export default app
