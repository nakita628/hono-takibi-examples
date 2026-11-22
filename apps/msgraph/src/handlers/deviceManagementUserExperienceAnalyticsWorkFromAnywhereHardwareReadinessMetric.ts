import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
  getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
  patchDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricHandler =
  app
    .openapi(
      getDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      patchDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
    .openapi(
      deleteDeviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRoute,
      (c) => {
        throw new Error('Not implemented')
      },
    )
