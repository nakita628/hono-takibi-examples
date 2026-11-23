import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalyticsLiveStreamsLiveStreamIdRoute,
  getAnalyticsSessionsSessionIdEventsRoute,
  getAnalyticsVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getAnalyticsLiveStreamsLiveStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsSessionsSessionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
