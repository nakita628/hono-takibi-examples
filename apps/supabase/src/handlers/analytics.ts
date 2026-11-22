import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute,
  getV1ProjectsRefAnalyticsEndpointsLogsAllRoute,
  getV1ProjectsRefAnalyticsEndpointsLogsRoute,
  getV1ProjectsRefAnalyticsEndpointsMetricsRoute,
  getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute,
  getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute,
  postV1ProjectsRefAnalyticsEndpointsLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getV1ProjectsRefAnalyticsEndpointsLogsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefAnalyticsEndpointsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAnalyticsEndpointsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
