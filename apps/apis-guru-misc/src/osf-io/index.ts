import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonsHandler,
  baseHandler,
  citationsHandler,
  collectionsHandler,
  commentsHandler,
  draftRegistrationsHandler,
  filesHandler,
  institutionsHandler,
  licensesHandler,
  logsHandler,
  nodesHandler,
  preprintProvidersHandler,
  preprintsHandler,
  registrationSchemaBlocksHandler,
  registrationSchemasHandler,
  registrationsHandler,
  schemaResponseActionsHandler,
  schemaResponsesHandler,
  taxonomiesHandler,
  usersHandler,
  viewOnlyLinksHandler,
  wikisHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', baseHandler)
  .route('/', logsHandler)
  .route('/', addonsHandler)
  .route('/', citationsHandler)
  .route('/', collectionsHandler)
  .route('/', commentsHandler)
  .route('/', draftRegistrationsHandler)
  .route('/', filesHandler)
  .route('/', institutionsHandler)
  .route('/', licensesHandler)
  .route('/', nodesHandler)
  .route('/', preprintProvidersHandler)
  .route('/', preprintsHandler)
  .route('/', registrationsHandler)
  .route('/', schemaResponsesHandler)
  .route('/', schemaResponseActionsHandler)
  .route('/', registrationSchemaBlocksHandler)
  .route('/', registrationSchemasHandler)
  .route('/', taxonomiesHandler)
  .route('/', usersHandler)
  .route('/', viewOnlyLinksHandler)
  .route('/', wikisHandler)

export default app
