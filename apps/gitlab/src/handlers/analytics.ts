import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AnalyticsGroupActivityIssuesCountRoute,
  getApiV4AnalyticsGroupActivityMergeRequestsCountRoute,
  getApiV4AnalyticsGroupActivityNewMembersCountRoute,
  getApiV4ProjectsIdAnalyticsDeploymentFrequencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getApiV4ProjectsIdAnalyticsDeploymentFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AnalyticsGroupActivityIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AnalyticsGroupActivityMergeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AnalyticsGroupActivityNewMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
