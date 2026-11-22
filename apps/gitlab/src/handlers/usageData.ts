import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4UsageDataNonSqlMetricsRoute,
  getApiV4UsageDataQueriesRoute,
  getApiV4UsageDataServicePingRoute,
  postApiV4UsageDataIncrementCounterRoute,
  postApiV4UsageDataIncrementUniqueUsersRoute,
  postApiV4UsageDataTrackEventRoute,
  postApiV4UsageDataTrackEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageDataHandler = app
  .openapi(getApiV4UsageDataQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsageDataNonSqlMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsageDataIncrementCounterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsageDataIncrementUniqueUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsageDataTrackEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsageDataTrackEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsageDataServicePingRoute, (c) => {
    throw new Error('Not implemented')
  })
