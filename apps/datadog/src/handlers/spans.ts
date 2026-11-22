import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SpansEventsRoute,
  postApiV2SpansAnalyticsAggregateRoute,
  postApiV2SpansEventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spansHandler = app
  .openapi(postApiV2SpansAnalyticsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SpansEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SpansEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
