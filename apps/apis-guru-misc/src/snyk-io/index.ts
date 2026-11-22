import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditLogsHandler,
  dependenciesHandler,
  entitlementsHandler,
  groupsHandler,
  importProjectsHandler,
  integrationsHandler,
  licensesHandler,
  monitorHandler,
  organizationsHandler,
  projectsHandler,
  reportingAPIHandler,
  testHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', auditLogsHandler)
  .route('/', groupsHandler)
  .route('/', monitorHandler)
  .route('/', organizationsHandler)
  .route('/', dependenciesHandler)
  .route('/', entitlementsHandler)
  .route('/', integrationsHandler)
  .route('/', importProjectsHandler)
  .route('/', licensesHandler)
  .route('/', projectsHandler)
  .route('/', webhooksHandler)
  .route('/', reportingAPIHandler)
  .route('/', testHandler)
  .route('/', usersHandler)

export default app
