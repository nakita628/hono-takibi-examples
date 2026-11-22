import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cannedResponsesHandler,
  livechatAppearanceHandler,
  livechatHandler,
  livechatMessagesHandler,
  livechatPageVisitedHandler,
  livechatTriggersHandler,
  omnichannelAgentsHandler,
  omnichannelAgentStatsHandler,
  omnichannelBusinessHoursHandler,
  omnichannelContactsHandler,
  omnichannelCustomFieldsHandler,
  omnichannelDashboardsHandler,
  omnichannelDepartmentsHandler,
  omnichannelInquiriesHandler,
  omnichannelMonitorsHandler,
  omnichannelPrioritiesHandler,
  omnichannelRoomsHandler,
  omnichannelStatisticsHandler,
  omnichannelTagsHandler,
  omnichannelTranscriptHandler,
  omnichannelUnitsHandler,
  omnichannelUsersHandler,
  omnichannelVisitorsHandler,
  omnichannelWebhooksHandler,
  reportsHandler,
  slaPoliciesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', omnichannelUsersHandler)
  .route('/', omnichannelAgentsHandler)
  .route('/', omnichannelContactsHandler)
  .route('/', omnichannelStatisticsHandler)
  .route('/', livechatHandler)
  .route('/', omnichannelRoomsHandler)
  .route('/', omnichannelDepartmentsHandler)
  .route('/', omnichannelCustomFieldsHandler)
  .route('/', livechatPageVisitedHandler)
  .route('/', omnichannelTranscriptHandler)
  .route('/', omnichannelAgentStatsHandler)
  .route('/', livechatAppearanceHandler)
  .route('/', omnichannelBusinessHoursHandler)
  .route('/', omnichannelDashboardsHandler)
  .route('/', omnichannelInquiriesHandler)
  .route('/', livechatTriggersHandler)
  .route('/', omnichannelMonitorsHandler)
  .route('/', omnichannelPrioritiesHandler)
  .route('/', omnichannelTagsHandler)
  .route('/', omnichannelUnitsHandler)
  .route('/', reportsHandler)
  .route('/', slaPoliciesHandler)
  .route('/', omnichannelVisitorsHandler)
  .route('/', cannedResponsesHandler)
  .route('/', livechatMessagesHandler)
  .route('/', omnichannelWebhooksHandler)

export default app
