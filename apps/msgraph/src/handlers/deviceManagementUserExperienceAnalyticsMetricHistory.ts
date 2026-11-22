import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
  getDeviceManagementUserExperienceAnalyticsMetricHistoryCountRoute,
  getDeviceManagementUserExperienceAnalyticsMetricHistoryRoute,
  getDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
  patchDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
  postDeviceManagementUserExperienceAnalyticsMetricHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsMetricHistoryHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsMetricHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsMetricHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsMetricHistoryUserExperienceAnalyticsMetricHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsMetricHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
