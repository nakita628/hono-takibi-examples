import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addonsHandler,
  adminUIHandler,
  apiTokensHandler,
  archiveHandler,
  authHandler,
  clientHandler,
  contextHandler,
  dependenciesHandler,
  environmentsHandler,
  eventsHandler,
  featuresHandler,
  featureTypesHandler,
  frontendAPIHandler,
  importExportHandler,
  instanceAdminHandler,
  maintenanceHandler,
  metricsHandler,
  notificationsHandler,
  operationalHandler,
  personalAccessTokensHandler,
  playgroundHandler,
  projectsHandler,
  publicSignupTokensHandler,
  searchHandler,
  segmentsHandler,
  strategiesHandler,
  tagsHandler,
  telemetryHandler,
  unknownFlagsHandler,
  unleashEdgeHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', featuresHandler)
  .route('/', authHandler)
  .route('/', metricsHandler)
  .route('/', notificationsHandler)
  .route('/', adminUIHandler)
  .route('/', usersHandler)
  .route('/', unleashEdgeHandler)
  .route('/', operationalHandler)
  .route('/', publicSignupTokensHandler)
  .route('/', featureTypesHandler)
  .route('/', archiveHandler)
  .route('/', strategiesHandler)
  .route('/', eventsHandler)
  .route('/', playgroundHandler)
  .route('/', unknownFlagsHandler)
  .route('/', personalAccessTokensHandler)
  .route('/', contextHandler)
  .route('/', importExportHandler)
  .route('/', tagsHandler)
  .route('/', addonsHandler)
  .route('/', apiTokensHandler)
  .route('/', dependenciesHandler)
  .route('/', environmentsHandler)
  .route('/', instanceAdminHandler)
  .route('/', segmentsHandler)
  .route('/', maintenanceHandler)
  .route('/', telemetryHandler)
  .route('/', searchHandler)
  .route('/', clientHandler)
  .route('/', frontendAPIHandler)

export default app
