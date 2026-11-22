import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1EngagementDashboardChannelsListRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsEngagementHandler = app.openapi(
  getApiV1EngagementDashboardChannelsListRoute,
  (c) => {},
)
