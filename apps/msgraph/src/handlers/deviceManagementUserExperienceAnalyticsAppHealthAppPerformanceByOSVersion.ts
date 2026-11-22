import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionHandler = app
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByOSVersionCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
