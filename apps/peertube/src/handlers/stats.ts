import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ServerStatsRoute, postApiV1MetricsPlaybackRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getApiV1ServerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetricsPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
