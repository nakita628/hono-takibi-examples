import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementUserExperienceAnalyticsOverviewRoute,
  getDeviceManagementUserExperienceAnalyticsOverviewRoute,
  patchDeviceManagementUserExperienceAnalyticsOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementUserExperienceAnalyticsOverviewHandler = app
  .openapi(getDeviceManagementUserExperienceAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementUserExperienceAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementUserExperienceAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
