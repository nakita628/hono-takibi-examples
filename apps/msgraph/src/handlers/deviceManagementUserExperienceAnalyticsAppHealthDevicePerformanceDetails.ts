import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCountRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsRoute,
  getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
  patchDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
  postDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsHandler = app
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsUserExperienceAnalyticsAppHealthDevicePerformanceDetailsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
