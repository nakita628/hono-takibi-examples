import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsExplorationsHandler,
  archetypesHandler,
  attributesHandler,
  auditsHandler,
  autoRunsHandler,
  codeReferencesHandler,
  configRevisionsHandler,
  configsHandler,
  constantRevisionsHandler,
  constantsHandler,
  contextualBanditQueriesHandler,
  contextualBanditsHandler,
  customFieldsHandler,
  customHooksHandler,
  dashboardsHandler,
  dataSourcesHandler,
  dimensionsHandler,
  environmentsHandler,
  eventWebhooksHandler,
  experimentsHandler,
  experimentTemplatesHandler,
  factMetricsHandler,
  factTablesHandler,
  featureRevisionsHandler,
  featureRevisionsV2Handler,
  featuresHandler,
  featuresV2Handler,
  holdoutsHandler,
  informationSchemaTablesHandler,
  interleavingExposureQueriesHandler,
  interleavingsHandler,
  learningsHandler,
  membersHandler,
  metaHandler,
  metricGroupsHandler,
  metricsHandler,
  namespacesHandler,
  organizationsHandler,
  populationsHandler,
  projectsHandler,
  queriesHandler,
  rampSchedulesHandler,
  rampScheduleTemplatesHandler,
  releasesHandler,
  reportsHandler,
  savedGroupRevisionsHandler,
  savedGroupsHandler,
  sdkConnectionRevisionsHandler,
  sdkConnectionsHandler,
  sdkWebhooksHandler,
  segmentsHandler,
  settingsHandler,
  snapshotsHandler,
  teamsHandler,
  usageHandler,
  v1Handler,
  visualChangesetsHandler,
  webhookSecretsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', featuresHandler)
  .route('/', featureRevisionsHandler)
  .route('/', featuresV2Handler)
  .route('/', featureRevisionsV2Handler)
  .route('/', archetypesHandler)
  .route('/', experimentsHandler)
  .route('/', visualChangesetsHandler)
  .route('/', contextualBanditsHandler)
  .route('/', snapshotsHandler)
  .route('/', metricsHandler)
  .route('/', usageHandler)
  .route('/', segmentsHandler)
  .route('/', dimensionsHandler)
  .route('/', projectsHandler)
  .route('/', environmentsHandler)
  .route('/', attributesHandler)
  .route('/', sdkConnectionsHandler)
  .route('/', sdkConnectionRevisionsHandler)
  .route('/', dataSourcesHandler)
  .route('/', savedGroupsHandler)
  .route('/', savedGroupRevisionsHandler)
  .route('/', constantsHandler)
  .route('/', constantRevisionsHandler)
  .route('/', configsHandler)
  .route('/', configRevisionsHandler)
  .route('/', releasesHandler)
  .route('/', customHooksHandler)
  .route('/', organizationsHandler)
  .route('/', v1Handler)
  .route('/', factTablesHandler)
  .route('/', factMetricsHandler)
  .route('/', codeReferencesHandler)
  .route('/', membersHandler)
  .route('/', queriesHandler)
  .route('/', settingsHandler)
  .route('/', metaHandler)
  .route('/', informationSchemaTablesHandler)
  .route('/', rampSchedulesHandler)
  .route('/', reportsHandler)
  .route('/', namespacesHandler)
  .route('/', eventWebhooksHandler)
  .route('/', auditsHandler)
  .route('/', dashboardsHandler)
  .route('/', contextualBanditQueriesHandler)
  .route('/', interleavingExposureQueriesHandler)
  .route('/', interleavingsHandler)
  .route('/', customFieldsHandler)
  .route('/', metricGroupsHandler)
  .route('/', teamsHandler)
  .route('/', experimentTemplatesHandler)
  .route('/', analyticsExplorationsHandler)
  .route('/', rampScheduleTemplatesHandler)
  .route('/', learningsHandler)
  .route('/', holdoutsHandler)
  .route('/', autoRunsHandler)
  .route('/', populationsHandler)
  .route('/', webhookSecretsHandler)
  .route('/', sdkWebhooksHandler)

export default app
