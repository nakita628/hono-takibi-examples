import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute, (c) => {
    throw new Error('Not implemented')
  })
