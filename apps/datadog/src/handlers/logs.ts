import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2LogsEventsRoute,
  postApiV2LogsAnalyticsAggregateRoute,
  postApiV2LogsEventsSearchRoute,
  postApiV2LogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(postApiV2LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsAnalyticsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
