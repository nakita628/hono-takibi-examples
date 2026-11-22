import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsRoute,
  getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute,
  getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute,
  getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelDashboardsHandler = app
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute, (c) => {
    throw new Error('Not implemented')
  })
