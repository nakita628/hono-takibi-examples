import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abilitiesHandler,
  addOnsHandler,
  alertGroupingSettingsHandler,
  analyticsHandler,
  auditHandler,
  automationActionsHandler,
  businessServicesHandler,
  changeEventsHandler,
  enrichmentIntegrationsHandler,
  enrichmentSchemasHandler,
  escalationPoliciesHandler,
  eventEnrichmentsHandler,
  eventOrchestrationsHandler,
  extensionSchemasHandler,
  extensionsHandler,
  incidentCustomFieldsHandler,
  incidentsHandler,
  incidentTypesHandler,
  incidentWorkflowsHandler,
  ipAllowListsHandler,
  licensesHandler,
  logEntriesHandler,
  maintenanceWindowsHandler,
  notificationsHandler,
  oAuthDelegationsHandler,
  onCallsHandler,
  pausedIncidentReportsHandler,
  postIncidentReviewsHandler,
  prioritiesHandler,
  recommendationsHandler,
  rulesetsHandler,
  schedulesHandler,
  schedulesV3Handler,
  serviceCustomFieldsHandler,
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
  vendorsHandler,
  webhooksHandler,
  workflowIntegrationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tagsHandler)
  .route('/', abilitiesHandler)
  .route('/', addOnsHandler)
  .route('/', alertGroupingSettingsHandler)
  .route('/', analyticsHandler)
  .route('/', auditHandler)
  .route('/', automationActionsHandler)
  .route('/', businessServicesHandler)
  .route('/', changeEventsHandler)
  .route('/', enrichmentIntegrationsHandler)
  .route('/', enrichmentSchemasHandler)
  .route('/', escalationPoliciesHandler)
  .route('/', eventOrchestrationsHandler)
  .route('/', extensionSchemasHandler)
  .route('/', eventEnrichmentsHandler)
  .route('/', extensionsHandler)
  .route('/', incidentWorkflowsHandler)
  .route('/', incidentsHandler)
  .route('/', postIncidentReviewsHandler)
  .route('/', incidentTypesHandler)
  .route('/', incidentCustomFieldsHandler)
  .route('/', ipAllowListsHandler)
  .route('/', licensesHandler)
  .route('/', logEntriesHandler)
  .route('/', maintenanceWindowsHandler)
  .route('/', notificationsHandler)
  .route('/', oAuthDelegationsHandler)
  .route('/', onCallsHandler)
  .route('/', pausedIncidentReportsHandler)
  .route('/', prioritiesHandler)
  .route('/', rulesetsHandler)
  .route('/', schedulesHandler)
  .route('/', serviceDependenciesHandler)
  .route('/', servicesHandler)
  .route('/', serviceCustomFieldsHandler)
  .route('/', sessionConfigurationsHandler)
  .route('/', standardsHandler)
  .route('/', statusDashboardsHandler)
  .route('/', statusPagesHandler)
  .route('/', sreAgentHandler)
  .route('/', teamsHandler)
  .route('/', templatesHandler)
  .route('/', usersHandler)
  .route('/', vendorsHandler)
  .route('/', schedulesV3Handler)
  .route('/', webhooksHandler)
  .route('/', workflowIntegrationsHandler)
  .route('/', recommendationsHandler)

export default app
