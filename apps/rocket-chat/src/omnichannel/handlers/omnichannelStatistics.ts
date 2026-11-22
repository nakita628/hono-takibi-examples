import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatAnalyticsAgentOverviewRoute,
  getApiV1LivechatAnalyticsOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelStatisticsHandler = app
  .openapi(getApiV1LivechatAnalyticsAgentOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
