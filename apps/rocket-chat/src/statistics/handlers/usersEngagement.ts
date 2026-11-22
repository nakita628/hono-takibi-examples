import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1EngagementDashboardUsersActiveUsersRoute,
  getApiV1EngagementDashboardUsersChatBusierHourlyDataRoute,
  getApiV1EngagementDashboardUsersChatBusierWeeklyDataRoute,
  getApiV1EngagementDashboardUsersNewUsersRoute,
  getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersEngagementHandler = app
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
