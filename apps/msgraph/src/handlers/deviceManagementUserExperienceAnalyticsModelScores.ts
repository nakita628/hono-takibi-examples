import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
  getDeviceManagementUserExperienceAnalyticsModelScoresCountRoute,
  getDeviceManagementUserExperienceAnalyticsModelScoresRoute,
  getDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
  patchDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
  postDeviceManagementUserExperienceAnalyticsModelScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsModelScoresHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsModelScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsModelScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsModelScoresUserExperienceAnalyticsModelScoresIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsModelScoresCountRoute, (c) => {
    throw new Error('Not implemented')
  })
