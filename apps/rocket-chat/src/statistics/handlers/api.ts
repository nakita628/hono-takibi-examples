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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1StatisticsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatisticsTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardUsersNewUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardUsersActiveUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardUsersChatBusierHourlyDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardUsersChatBusierWeeklyDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardMessagesMessagesSentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardMessagesOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardMessagesTopFivePopularChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EngagementDashboardChannelsListRoute, (c) => {
    throw new Error('Not implemented')
  })
