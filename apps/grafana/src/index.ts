import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessControlHandler,
  adminHandler,
  adminLdapHandler,
  adminProvisioningHandler,
  adminUsersHandler,
  annotationsHandler,
  convertPrometheusHandler,
  dashboardsHandler,
  dashboardVariablesHandler,
  datasourcesHandler,
  devicesHandler,
  enterpriseHandler,
  foldersHandler,
  healthHandler,
  libraryElementsHandler,
  licensingHandler,
  migrationsHandler,
  orgHandler,
  orgsHandler,
  playlistsHandler,
  provisioningHandler,
  queryHistoryHandler,
  quotaHandler,
  recordingRulesHandler,
  reportsHandler,
  samlHandler,
  searchHandler,
  serviceAccountsHandler,
  signedInUserHandler,
  signingKeysHandler,
  snapshotsHandler,
  ssoSettingsHandler,
  syncTeamGroupsHandler,
  teamsHandler,
  userHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessControlHandler)
  .route('/', adminLdapHandler)
  .route('/', adminProvisioningHandler)
  .route('/', adminHandler)
  .route('/', adminUsersHandler)
  .route('/', quotaHandler)
  .route('/', annotationsHandler)
  .route('/', devicesHandler)
  .route('/', migrationsHandler)
  .route('/', convertPrometheusHandler)
  .route('/', dashboardsHandler)
  .route('/', dashboardVariablesHandler)
  .route('/', datasourcesHandler)
  .route('/', enterpriseHandler)
  .route('/', foldersHandler)
  .route('/', healthHandler)
  .route('/', libraryElementsHandler)
  .route('/', licensingHandler)
  .route('/', samlHandler)
  .route('/', orgHandler)
  .route('/', orgsHandler)
  .route('/', playlistsHandler)
  .route('/', queryHistoryHandler)
  .route('/', recordingRulesHandler)
  .route('/', reportsHandler)
  .route('/', searchHandler)
  .route('/', serviceAccountsHandler)
  .route('/', signingKeysHandler)
  .route('/', snapshotsHandler)
  .route('/', teamsHandler)
  .route('/', syncTeamGroupsHandler)
  .route('/', signedInUserHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', provisioningHandler)
  .route('/', ssoSettingsHandler)

export default app
