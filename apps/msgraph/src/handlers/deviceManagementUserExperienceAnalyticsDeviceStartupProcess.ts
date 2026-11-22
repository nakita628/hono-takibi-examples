import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesCountRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
  patchDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
  postDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsDeviceStartupProcessHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesUserExperienceAnalyticsDeviceStartupProcessIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceStartupProcessesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
