import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  batchHandler,
  boardsHandler,
  cardsHandler,
  checklistsHandler,
  labelsHandler,
  listsHandler,
  membersHandler,
  notificationsHandler,
  organizationsHandler,
  searchHandler,
  sessionsHandler,
  tokensHandler,
  typesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', batchHandler)
  .route('/', boardsHandler)
  .route('/', cardsHandler)
  .route('/', checklistsHandler)
  .route('/', labelsHandler)
  .route('/', listsHandler)
  .route('/', membersHandler)
  .route('/', notificationsHandler)
  .route('/', organizationsHandler)
  .route('/', searchHandler)
  .route('/', sessionsHandler)
  .route('/', tokensHandler)
  .route('/', typesHandler)
  .route('/', webhooksHandler)

export default app
