import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accountHandler,
  accountsHandler,
  archivesHandler,
  eventsHandler,
  eventTypesHandler,
  healthHandler,
  imagesHandler,
  importHandler,
  importsHandler,
  oauthHandler,
  policiesHandler,
  queryHandler,
  registriesHandler,
  repositoriesHandler,
  statusHandler,
  subscriptionsHandler,
  summariesHandler,
  systemHandler,
  userHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', accountHandler)
  .route('/', accountsHandler)
  .route('/', archivesHandler)
  .route('/', eventTypesHandler)
  .route('/', eventsHandler)
  .route('/', healthHandler)
  .route('/', imagesHandler)
  .route('/', importHandler)
  .route('/', importsHandler)
  .route('/', oauthHandler)
  .route('/', policiesHandler)
  .route('/', queryHandler)
  .route('/', registriesHandler)
  .route('/', repositoriesHandler)
  .route('/', statusHandler)
  .route('/', subscriptionsHandler)
  .route('/', summariesHandler)
  .route('/', systemHandler)
  .route('/', userHandler)
  .route('/', versionHandler)

export default app
