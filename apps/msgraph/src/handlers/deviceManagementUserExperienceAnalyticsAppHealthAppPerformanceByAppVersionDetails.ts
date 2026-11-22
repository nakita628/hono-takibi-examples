import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsHandler =
  app
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetailsCountRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
