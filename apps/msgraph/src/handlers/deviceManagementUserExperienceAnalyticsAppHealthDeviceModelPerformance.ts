import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceUserExperienceAnalyticsAppHealthDeviceModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
