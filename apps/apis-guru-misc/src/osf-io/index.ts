import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  actionsHandler,
  addonsHandler,
  citationsHandler,
  collectionsHandler,
  commentsHandler,
  draftRegistrationsHandler,
  filesHandler,
  institutionsHandler,
  licenseHandler,
  licensesHandler,
  logsHandler,
  nodesHandler,
  preprintProvidersHandler,
  preprintsHandler,
  registrationsHandler,
  schemaResponsesHandler,
  schemasHandler,
  taxonomiesHandler,
  usersHandler,
  viewOnlyLinksHandler,
  wikisHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', actionsHandler)
  .route('/', addonsHandler)
  .route('/', citationsHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', draftRegistrationsHandler)
  .route('/', filesHandler)
  .route('/', institutionsHandler)
  .route('/', licenseHandler)
  .route('/', licensesHandler)
  .route('/', logsHandler)
  .route('/', nodesHandler)
  .route('/', preprintProvidersHandler)
  .route('/', preprintsHandler)
  .route('/', registrationsHandler)
  .route('/', schemaResponsesHandler)
  .route('/', schemasHandler)
  .route('/', taxonomiesHandler)
  .route('/', usersHandler)
  .route('/', viewOnlyLinksHandler)
  .route('/', wikisHandler)

export default app
