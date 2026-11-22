import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceUserExperienceAnalyticsWorkFromAnywhereModelPerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
