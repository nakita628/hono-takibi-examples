import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1VideosIdStatsOverallRoute,
  getApiV1VideosIdStatsRetentionRoute,
  getApiV1VideosIdStatsTimeseriesMetricRoute,
  getApiV1VideosIdStatsUserAgentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoStatsHandler = app
  .openapi(getApiV1VideosIdStatsOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsUserAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdStatsTimeseriesMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
