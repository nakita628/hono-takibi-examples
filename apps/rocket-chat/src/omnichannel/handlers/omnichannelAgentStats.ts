import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatAgentsAgentIdDepartmentsRoute,
  getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute,
  getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute,
  getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelAgentStatsHandler = app
  .openapi(getApiV1LivechatAgentsAgentIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
