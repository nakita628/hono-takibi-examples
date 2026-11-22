import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentWorkersHandler,
  aiEvalsHandler,
  aiHandler,
  amqpTriggerHandler,
  appHandler,
  assetHandler,
  auditHandler,
  azureTriggerHandler,
  captureHandler,
  concurrencyGroupsHandler,
  configHandler,
  dataMetricHandler,
  dbtHandler,
  documentationHandler,
  draftHandler,
  emailTriggerHandler,
  favoriteHandler,
  flowConversationsHandler,
  flowHandler,
  folderHandler,
  gcpTriggerHandler,
  gitSyncHandler,
  granularAclHandler,
  groupHandler,
  healthHandler,
  helpersHandler,
  httpTriggerHandler,
  hubPublishHandler,
  indexSearchHandler,
  inputHandler,
  integrationHandler,
  jobHandler,
  kafkaTriggerHandler,
  mcpHandler,
  mcpOauthHandler,
  metricsHandler,
  mqttTriggerHandler,
  nativeTriggerHandler,
  natsTriggerHandler,
  npmProxyHandler,
  oauthHandler,
  oidcHandler,
  openapiHandler,
  pathAutocompleteHandler,
  postgresTriggerHandler,
  rawAppHandler,
  resourceHandler,
  scheduleHandler,
  scriptHandler,
  serviceLogsHandler,
  settingHandler,
  settingsHandler,
  slackAgentsHandler,
  sqsTriggerHandler,
  teamsHandler,
  tokenHandler,
  trashHandler,
  triggerHandler,
  userHandler,
  variableHandler,
  volumeHandler,
  websocketTriggerHandler,
  workerHandler,
  workspaceDependenciesHandler,
  workspaceHandler,
  workspaceIntegrationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', settingsHandler)
  .route('/', healthHandler)
  .route('/', documentationHandler)
  .route('/', auditHandler)
  .route('/', trashHandler)
  .route('/', userHandler)
  .route('/', gitSyncHandler)
  .route('/', workspaceHandler)
  .route('/', settingHandler)
  .route('/', dbtHandler)
  .route('/', dataMetricHandler)
  .route('/', tokenHandler)
  .route('/', oidcHandler)
  .route('/', variableHandler)
  .route('/', oauthHandler)
  .route('/', teamsHandler)
  .route('/', resourceHandler)
  .route('/', npmProxyHandler)
  .route('/', integrationHandler)
  .route('/', flowHandler)
  .route('/', appHandler)
  .route('/', scriptHandler)
  .route('/', draftHandler)
  .route('/', workerHandler)
  .route('/', workspaceDependenciesHandler)
  .route('/', jobHandler)
  .route('/', flowConversationsHandler)
  .route('/', slackAgentsHandler)
  .route('/', aiHandler)
  .route('/', aiEvalsHandler)
  .route('/', pathAutocompleteHandler)
  .route('/', rawAppHandler)
  .route('/', triggerHandler)
  .route('/', scheduleHandler)
  .route('/', openapiHandler)
  .route('/', httpTriggerHandler)
  .route('/', websocketTriggerHandler)
  .route('/', kafkaTriggerHandler)
  .route('/', natsTriggerHandler)
  .route('/', sqsTriggerHandler)
  .route('/', workspaceIntegrationHandler)
  .route('/', nativeTriggerHandler)
  .route('/', mqttTriggerHandler)
  .route('/', amqpTriggerHandler)
  .route('/', gcpTriggerHandler)
  .route('/', azureTriggerHandler)
  .route('/', postgresTriggerHandler)
  .route('/', emailTriggerHandler)
  .route('/', groupHandler)
  .route('/', folderHandler)
  .route('/', configHandler)
  .route('/', agentWorkersHandler)
  .route('/', granularAclHandler)
  .route('/', captureHandler)
  .route('/', favoriteHandler)
  .route('/', inputHandler)
  .route('/', helpersHandler)
  .route('/', metricsHandler)
  .route('/', serviceLogsHandler)
  .route('/', concurrencyGroupsHandler)
  .route('/', indexSearchHandler)
  .route('/', assetHandler)
  .route('/', volumeHandler)
  .route('/', mcpHandler)
  .route('/', mcpOauthHandler)
  .route('/', hubPublishHandler)

export default app
