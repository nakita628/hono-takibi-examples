import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesCountRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdAppHealthMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdBatteryHealthMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdBestPracticesMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdDeviceBootPerformanceMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRebootAnalyticsMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdResourcePerformanceMetricsRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
  getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdWorkFromAnywhereMetricsRoute,
  patchDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
  postDeviceManagementUserExperienceAnalyticsBaselinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsBaselineHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsBaselinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsBaselinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdAppHealthMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdBatteryHealthMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdBestPracticesMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdDeviceBootPerformanceMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdRebootAnalyticsMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdResourcePerformanceMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsBaselinesUserExperienceAnalyticsBaselineIdWorkFromAnywhereMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsBaselinesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
