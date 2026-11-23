import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1EngagementDashboardChannelsListRoute,
  getApiV1EngagementDashboardMessagesMessagesSentRoute,
  getApiV1EngagementDashboardMessagesOriginRoute,
  getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute,
  getApiV1EngagementDashboardUsersActiveUsersRoute,
  getApiV1EngagementDashboardUsersChatBusierHourlyDataRoute,
  getApiV1EngagementDashboardUsersChatBusierWeeklyDataRoute,
  getApiV1EngagementDashboardUsersNewUsersRoute,
  getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRoute,
  getApiV1StatisticsListRoute,
  getApiV1StatisticsRoute,
  postApiV1StatisticsTelemetryRoute,
} from './routes'
import {
  getApiV1EngagementDashboardChannelsListRouteHandler,
  getApiV1EngagementDashboardMessagesMessagesSentRouteHandler,
  getApiV1EngagementDashboardMessagesOriginRouteHandler,
  getApiV1EngagementDashboardMessagesTopFivePopularChannelsRouteHandler,
  getApiV1EngagementDashboardUsersActiveUsersRouteHandler,
  getApiV1EngagementDashboardUsersChatBusierHourlyDataRouteHandler,
  getApiV1EngagementDashboardUsersChatBusierWeeklyDataRouteHandler,
  getApiV1EngagementDashboardUsersNewUsersRouteHandler,
  getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRouteHandler,
  getApiV1StatisticsListRouteHandler,
  getApiV1StatisticsRouteHandler,
  postApiV1StatisticsTelemetryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1StatisticsListRoute, getApiV1StatisticsListRouteHandler)
  .openapi(getApiV1StatisticsRoute, getApiV1StatisticsRouteHandler)
  .openapi(postApiV1StatisticsTelemetryRoute, postApiV1StatisticsTelemetryRouteHandler)
  .openapi(
    getApiV1EngagementDashboardUsersNewUsersRoute,
    getApiV1EngagementDashboardUsersNewUsersRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardUsersActiveUsersRoute,
    getApiV1EngagementDashboardUsersActiveUsersRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRoute,
    getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardUsersChatBusierHourlyDataRoute,
    getApiV1EngagementDashboardUsersChatBusierHourlyDataRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardUsersChatBusierWeeklyDataRoute,
    getApiV1EngagementDashboardUsersChatBusierWeeklyDataRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardMessagesMessagesSentRoute,
    getApiV1EngagementDashboardMessagesMessagesSentRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardMessagesOriginRoute,
    getApiV1EngagementDashboardMessagesOriginRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute,
    getApiV1EngagementDashboardMessagesTopFivePopularChannelsRouteHandler,
  )
  .openapi(
    getApiV1EngagementDashboardChannelsListRoute,
    getApiV1EngagementDashboardChannelsListRouteHandler,
  )

export default app
