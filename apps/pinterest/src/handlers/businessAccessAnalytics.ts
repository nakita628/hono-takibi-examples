import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessesBusinessIdAnalyticsAggregatedTimelineRoute,
  getBusinessesBusinessIdAnalyticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessAccessAnalyticsHandler = app
  .openapi(getBusinessesBusinessIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAnalyticsAggregatedTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
