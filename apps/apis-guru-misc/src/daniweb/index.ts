import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  audiencesHandler,
  autocompletesHandler,
  conversationsHandler,
  groupsHandler,
  industriesHandler,
  markdownHandler,
  messagesHandler,
  positionsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', audiencesHandler)
  .route('/', autocompletesHandler)
  .route('/', conversationsHandler)
  .route('/', groupsHandler)
  .route('/', industriesHandler)
  .route('/', markdownHandler)
  .route('/', messagesHandler)
  .route('/', positionsHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
