import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  applicationsHandler,
  batchHandler,
  boardsHandler,
  cardsHandler,
  checklistsHandler,
  customFieldsHandler,
  emojiHandler,
  enterprisesHandler,
  labelsHandler,
  listsHandler,
  membersHandler,
  notificationsHandler,
  organizationsHandler,
  pluginsHandler,
  searchHandler,
  tokensHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', applicationsHandler)
  .route('/', batchHandler)
  .route('/', boardsHandler)
  .route('/', cardsHandler)
  .route('/', checklistsHandler)
  .route('/', customFieldsHandler)
  .route('/', emojiHandler)
  .route('/', enterprisesHandler)
  .route('/', labelsHandler)
  .route('/', listsHandler)
  .route('/', membersHandler)
  .route('/', notificationsHandler)
  .route('/', organizationsHandler)
  .route('/', pluginsHandler)
  .route('/', searchHandler)
  .route('/', tokensHandler)
  .route('/', webhooksHandler)

export default app
