import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apikeysHandler,
  authConfigHandler,
  certificatesHandler,
  configurationHandler,
  dataExporterConfigsHandler,
  environmentsHandler,
  groupsHandler,
  healthHandler,
  importHandler,
  jwtVerifiersHandler,
  scriptsHandler,
  servicesHandler,
  snowmonkeyHandler,
  statsHandler,
  templatesHandler,
  validationAuthoritiesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apikeysHandler)
  .route('/', authConfigHandler)
  .route('/', certificatesHandler)
  .route('/', validationAuthoritiesHandler)
  .route('/', dataExporterConfigsHandler)
  .route('/', configurationHandler)
  .route('/', groupsHandler)
  .route('/', servicesHandler)
  .route('/', importHandler)
  .route('/', statsHandler)
  .route('/', scriptsHandler)
  .route('/', snowmonkeyHandler)
  .route('/', jwtVerifiersHandler)
  .route('/', healthHandler)
  .route('/', environmentsHandler)
  .route('/', templatesHandler)

export default app
