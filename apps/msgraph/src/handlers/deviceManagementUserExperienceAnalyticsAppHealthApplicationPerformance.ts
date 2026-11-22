import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceUserExperienceAnalyticsAppHealthApplicationPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
