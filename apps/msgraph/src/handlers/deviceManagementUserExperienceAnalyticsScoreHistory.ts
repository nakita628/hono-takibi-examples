import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
  getDeviceManagementUserExperienceAnalyticsScoreHistoryCountRoute,
  getDeviceManagementUserExperienceAnalyticsScoreHistoryRoute,
  getDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
  patchDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
  postDeviceManagementUserExperienceAnalyticsScoreHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsScoreHistoryHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsScoreHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementUserExperienceAnalyticsScoreHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementUserExperienceAnalyticsScoreHistoryUserExperienceAnalyticsScoreHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementUserExperienceAnalyticsScoreHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
