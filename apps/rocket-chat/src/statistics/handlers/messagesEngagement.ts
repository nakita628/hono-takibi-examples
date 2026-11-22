import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1EngagementDashboardMessagesMessagesSentRoute,
  getApiV1EngagementDashboardMessagesOriginRoute,
  getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesEngagementHandler = app
  .openapi(getApiV1EngagementDashboardMessagesMessagesSentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardMessagesOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
