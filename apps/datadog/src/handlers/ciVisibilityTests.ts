import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CiTestsEventsRoute,
  postApiV2CiTestsAnalyticsAggregateRoute,
  postApiV2CiTestsEventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciVisibilityTestsHandler = app
  .openapi(postApiV2CiTestsAnalyticsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CiTestsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CiTestsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
