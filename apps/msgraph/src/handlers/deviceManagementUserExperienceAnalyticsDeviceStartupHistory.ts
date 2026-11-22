import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryCountRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
  patchDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
  postDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsDeviceStartupHistoryHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryUserExperienceAnalyticsDeviceStartupHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceStartupHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
