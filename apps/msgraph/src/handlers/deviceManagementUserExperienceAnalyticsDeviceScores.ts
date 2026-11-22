import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceScoresCountRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceScoresRoute,
  getDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
  patchDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
  postDeviceManagementUserExperienceAnalyticsDeviceScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsDeviceScoresHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsDeviceScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsDeviceScoresUserExperienceAnalyticsDeviceScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsDeviceScoresCountRoute, (c) => {
    throw new Error('Not implemented')
  })
