import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceUserExperienceAnalyticsAppHealthDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
