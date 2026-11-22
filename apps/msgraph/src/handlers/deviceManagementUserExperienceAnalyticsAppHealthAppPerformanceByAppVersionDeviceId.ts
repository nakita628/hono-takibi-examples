import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdHandler =
  app
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      postDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      patchDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      deleteDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdIdRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      getDeviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceIdCountRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
