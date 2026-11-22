import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceUserExperienceAnalyticsAppHealthOSVersionPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
