import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceUserExperienceAnalyticsDeviceStartupProcessPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
