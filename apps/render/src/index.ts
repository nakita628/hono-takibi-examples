import { OpenAPIHono } from '@hono/zod-openapi'
import {
  blueprintsHandler,
  buildSourcesHandler,
  cronJobsHandler,
  dedicatedIpsHandler,
  disksHandler,
  envGroupsHandler,
  environmentsHandler,
  eventsHandler,
  flowRunsHandler,
  flowsHandler,
  keyValueHandler,
  logsHandler,
  maintenanceHandler,
  metricsHandler,
  metricsStreamHandler,
  notificationSettingsHandler,
  organizationsHandler,
  ownersHandler,
  postgresHandler,
  projectsHandler,
  redisHandler,
  registrycredentialsHandler,
  sandboxesHandler,
  sandboxGroupsHandler,
  servicesHandler,
  taskRunsHandler,
  tasksHandler,
  usersHandler,
  webhooksHandler,
  workflowsHandler,
  workflowversionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', blueprintsHandler)
  .route('/', ownersHandler)
  .route('/', dedicatedIpsHandler)
  .route('/', disksHandler)
  .route('/', usersHandler)
  .route('/', organizationsHandler)
  .route('/', notificationSettingsHandler)
  .route('/', registrycredentialsHandler)
  .route('/', servicesHandler)
  .route('/', cronJobsHandler)
  .route('/', eventsHandler)
  .route('/', logsHandler)
  .route('/', metricsStreamHandler)
  .route('/', metricsHandler)
  .route('/', keyValueHandler)
  .route('/', redisHandler)
  .route('/', postgresHandler)
  .route('/', projectsHandler)
  .route('/', environmentsHandler)
  .route('/', envGroupsHandler)
  .route('/', maintenanceHandler)
  .route('/', buildSourcesHandler)
  .route('/', webhooksHandler)
  .route('/', workflowsHandler)
  .route('/', workflowversionsHandler)
  .route('/', tasksHandler)
  .route('/', taskRunsHandler)
  .route('/', flowsHandler)
  .route('/', flowRunsHandler)
  .route('/', sandboxesHandler)
  .route('/', sandboxGroupsHandler)

export default app
