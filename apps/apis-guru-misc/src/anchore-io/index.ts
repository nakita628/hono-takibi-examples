import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  archivesHandler,
  eventsHandler,
  healthHandler,
  identityHandler,
  imagesHandler,
  importHandler,
  importsHandler,
  oauthHandler,
  policiesHandler,
  queryHandler,
  registriesHandler,
  repositoryCredentialsHandler,
  subscriptionsHandler,
  summariesHandler,
  systemHandler,
  userManagementHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', identityHandler)
  .route('/', userManagementHandler)
  .route('/', archivesHandler)
  .route('/', eventsHandler)
  .route('/', healthHandler)
  .route('/', imagesHandler)
  .route('/', importHandler)
  .route('/', importsHandler)
  .route('/', oauthHandler)
  .route('/', policiesHandler)
  .route('/', queryHandler)
  .route('/', registriesHandler)
  .route('/', repositoryCredentialsHandler)
  .route('/', systemHandler)
  .route('/', subscriptionsHandler)
  .route('/', summariesHandler)
  .route('/', versionHandler)

export default app
