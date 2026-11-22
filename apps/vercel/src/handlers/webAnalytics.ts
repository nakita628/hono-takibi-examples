import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1QueryWebAnalyticsEventsAggregateRoute,
  getV1QueryWebAnalyticsEventsCountRoute,
  getV1QueryWebAnalyticsVisitsAggregateRoute,
  getV1QueryWebAnalyticsVisitsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webAnalyticsHandler = app
  .openapi(getV1QueryWebAnalyticsVisitsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsEventsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsVisitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueryWebAnalyticsEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
