import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abilitiesHandler,
  addonsHandler,
  alertGroupingSettingsHandler,
  analyticsHandler,
  auditHandler,
  automationActionsHandler,
  businessServicesHandler,
  changeEventsHandler,
  enrichmentHandler,
  entityTypeHandler,
  escalationPoliciesHandler,
  eventOrchestrationsHandler,
  extensionSchemasHandler,
  extensionsHandler,
  incidentsHandler,
  incidentWorkflowsHandler,
  ipAllowListsHandler,
  licenseAllocationsHandler,
  licensesHandler,
  logEntriesHandler,
  maintenanceWindowsHandler,
  notificationsHandler,
  oauthDelegationsHandler,
  oncallsHandler,
  pausedIncidentReportsHandler,
  prioritiesHandler,
  recommendationsHandler,
  rulesetsHandler,
  schedulesHandler,
  serviceDependenciesHandler,
  servicesHandler,
  sessionConfigurationsHandler,
  sreAgentHandler,
  standardsHandler,
  statusDashboardsHandler,
  statusPagesHandler,
  tagsHandler,
  teamsHandler,
  templatesHandler,
  usersHandler,
  v3Handler,
  vendorsHandler,
  webhookSubscriptionsHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', entityTypeHandler)
  .route('/', abilitiesHandler)
  .route('/', addonsHandler)
  .route('/', alertGroupingSettingsHandler)
  .route('/', analyticsHandler)
  .route('/', auditHandler)
  .route('/', automationActionsHandler)
  .route('/', businessServicesHandler)
  .route('/', changeEventsHandler)
  .route('/', enrichmentHandler)
  .route('/', escalationPoliciesHandler)
  .route('/', eventOrchestrationsHandler)
  .route('/', extensionSchemasHandler)
  .route('/', extensionsHandler)
  .route('/', incidentWorkflowsHandler)
  .route('/', incidentsHandler)
  .route('/', ipAllowListsHandler)
  .route('/', licenseAllocationsHandler)
  .route('/', licensesHandler)
  .route('/', logEntriesHandler)
  .route('/', maintenanceWindowsHandler)
  .route('/', notificationsHandler)
  .route('/', oauthDelegationsHandler)
  .route('/', oncallsHandler)
  .route('/', pausedIncidentReportsHandler)
  .route('/', prioritiesHandler)
  .route('/', rulesetsHandler)
  .route('/', schedulesHandler)
  .route('/', serviceDependenciesHandler)
  .route('/', servicesHandler)
  .route('/', sessionConfigurationsHandler)
  .route('/', standardsHandler)
  .route('/', statusDashboardsHandler)
  .route('/', statusPagesHandler)
  .route('/', sreAgentHandler)
  .route('/', tagsHandler)
  .route('/', teamsHandler)
  .route('/', templatesHandler)
  .route('/', usersHandler)
  .route('/', vendorsHandler)
  .route('/', v3Handler)
  .route('/', webhookSubscriptionsHandler)
  .route('/', workflowsHandler)
  .route('/', recommendationsHandler)

export default app
