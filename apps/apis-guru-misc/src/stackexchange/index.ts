import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokensHandler,
  answersHandler,
  appsHandler,
  badgesHandler,
  commentsHandler,
  errorsHandler,
  eventsHandler,
  filtersHandler,
  inboxHandler,
  infoHandler,
  meHandler,
  notificationsHandler,
  postsHandler,
  privilegesHandler,
  questionsHandler,
  revisionsHandler,
  searchHandler,
  similarHandler,
  sitesHandler,
  suggestedEditsHandler,
  tagsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessTokensHandler)
  .route('/', answersHandler)
  .route('/', appsHandler)
  .route('/', badgesHandler)
  .route('/', commentsHandler)
  .route('/', errorsHandler)
  .route('/', eventsHandler)
  .route('/', filtersHandler)
  .route('/', inboxHandler)
  .route('/', infoHandler)
  .route('/', meHandler)
  .route('/', notificationsHandler)
  .route('/', postsHandler)
  .route('/', privilegesHandler)
  .route('/', questionsHandler)
  .route('/', revisionsHandler)
  .route('/', searchHandler)
  .route('/', similarHandler)
  .route('/', sitesHandler)
  .route('/', suggestedEditsHandler)
  .route('/', tagsHandler)
  .route('/', usersHandler)

export default app
