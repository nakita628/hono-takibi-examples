import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditLogsHandler,
  blueprintsHandler,
  buildSourcesHandler,
  customDomainsHandler,
  dedicatedIPsHandler,
  deploysHandler,
  disksHandler,
  environmentGroupsHandler,
  eventsHandler,
  keyValueHandler,
  logsHandler,
  maintenanceHandler,
  metricsHandler,
  notificationSettingsHandler,
  oneOffJobsHandler,
  postgresHandler,
  projectsEnvironmentsHandler,
  redisDeprecatedHandler,
  registryCredentialsHandler,
  sandboxesHandler,
  services__CronJobsHandler,
  services__HeadersHandler,
  services__RoutesHandler,
  servicesHandler,
  usersHandler,
  webhooksHandler,
  workflowFlowsHandler,
  workflowsHandler,
  workflowTasksHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', blueprintsHandler)
  .route('/', workspacesHandler)
  .route('/', dedicatedIPsHandler)
  .route('/', disksHandler)
  .route('/', usersHandler)
  .route('/', auditLogsHandler)
  .route('/', notificationSettingsHandler)
  .route('/', registryCredentialsHandler)
  .route('/', servicesHandler)
  .route('/', deploysHandler)
  .route('/', services__HeadersHandler)
  .route('/', services__RoutesHandler)
  .route('/', customDomainsHandler)
  .route('/', oneOffJobsHandler)
  .route('/', services__CronJobsHandler)
  .route('/', eventsHandler)
  .route('/', logsHandler)
  .route('/', metricsHandler)
  .route('/', keyValueHandler)
  .route('/', redisDeprecatedHandler)
  .route('/', postgresHandler)
  .route('/', projectsEnvironmentsHandler)
  .route('/', environmentGroupsHandler)
  .route('/', maintenanceHandler)
  .route('/', buildSourcesHandler)
  .route('/', webhooksHandler)
  .route('/', workflowsHandler)
  .route('/', workflowTasksHandler)
  .route('/', workflowFlowsHandler)
  .route('/', sandboxesHandler)

export default app
