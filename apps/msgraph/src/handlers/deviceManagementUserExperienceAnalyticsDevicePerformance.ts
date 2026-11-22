import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
  getDeviceManagementUserExperienceAnalyticsDevicePerformanceCountRoute,
  getDeviceManagementUserExperienceAnalyticsDevicePerformanceRoute,
  getDeviceManagementUserExperienceAnalyticsDevicePerformanceSummarizeDevicePerformanceDevicesSummarizeBySummarizeByRoute,
  getDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
  patchDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
  postDeviceManagementUserExperienceAnalyticsDevicePerformanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsDevicePerformanceHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsDevicePerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsDevicePerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsDevicePerformanceUserExperienceAnalyticsDevicePerformanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsDevicePerformanceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDevicePerformanceSummarizeDevicePerformanceDevicesSummarizeBySummarizeByRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
