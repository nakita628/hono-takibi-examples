import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountAgentBotsHandler,
  accountHandler,
  accountsHandler,
  accountUsersHandler,
  agentBotsHandler,
  agentsHandler,
  auditLogsHandler,
  automationRuleHandler,
  campaignsHandler,
  cannedResponsesHandler,
  contactLabelsHandler,
  contactsAPIHandler,
  contactsHandler,
  conversationAssignmentsHandler,
  conversationHandler,
  conversationsAPIHandler,
  conversationsHandler,
  csatSurveyPageHandler,
  customAttributesHandler,
  customFiltersHandler,
  helpCenterHandler,
  inboxAPIHandler,
  inboxesHandler,
  integrationsHandler,
  labelsHandler,
  messagesAPIHandler,
  messagesHandler,
  profileHandler,
  reportsHandler,
  teamsHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', accountUsersHandler)
  .route('/', agentBotsHandler)
  .route('/', usersHandler)
  .route('/', inboxAPIHandler)
  .route('/', contactsAPIHandler)
  .route('/', conversationsAPIHandler)
  .route('/', messagesAPIHandler)
  .route('/', csatSurveyPageHandler)
  .route('/', accountHandler)
  .route('/', auditLogsHandler)
  .route('/', accountAgentBotsHandler)
  .route('/', agentsHandler)
  .route('/', cannedResponsesHandler)
  .route('/', customAttributesHandler)
  .route('/', contactsHandler)
  .route('/', contactLabelsHandler)
  .route('/', automationRuleHandler)
  .route('/', helpCenterHandler)
  .route('/', conversationsHandler)
  .route('/', conversationAssignmentsHandler)
  .route('/', inboxesHandler)
  .route('/', labelsHandler)
  .route('/', messagesHandler)
  .route('/', integrationsHandler)
  .route('/', profileHandler)
  .route('/', teamsHandler)
  .route('/', customFiltersHandler)
  .route('/', webhooksHandler)
  .route('/', reportsHandler)
  .route('/', conversationHandler)
  .route('/', campaignsHandler)

export default app
