import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aboutHandler,
  authHandler,
  connectionsHandler,
  dataRetentionSettingsHandler,
  documentsHandler,
  formatsHandler,
  inboxesHandler,
  integrationsHandler,
  predictorSettingsHandler,
  projectsHandler,
  reportsHandler,
  rolesHandler,
  ruleConfigHandler,
  samplingSettingsHandler,
  settingsHandler,
  ssoHandler,
  statsHandler,
  styleHandler,
  tenantHandler,
  thresholdSettingsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aboutHandler)
  .route('/', authHandler)
  .route('/', connectionsHandler)
  .route('/', dataRetentionSettingsHandler)
  .route('/', documentsHandler)
  .route('/', formatsHandler)
  .route('/', inboxesHandler)
  .route('/', integrationsHandler)
  .route('/', predictorSettingsHandler)
  .route('/', projectsHandler)
  .route('/', reportsHandler)
  .route('/', rolesHandler)
  .route('/', ruleConfigHandler)
  .route('/', samplingSettingsHandler)
  .route('/', settingsHandler)
  .route('/', ssoHandler)
  .route('/', statsHandler)
  .route('/', styleHandler)
  .route('/', tenantHandler)
  .route('/', thresholdSettingsHandler)
  .route('/', usersHandler)

export default app
