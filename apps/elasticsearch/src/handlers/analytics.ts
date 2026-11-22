import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationAnalyticsNameRoute,
  getApplicationAnalyticsNameRoute,
  getApplicationAnalyticsRoute,
  postApplicationAnalyticsCollectionNameEventEventTypeRoute,
  putApplicationAnalyticsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationAnalyticsCollectionNameEventEventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
