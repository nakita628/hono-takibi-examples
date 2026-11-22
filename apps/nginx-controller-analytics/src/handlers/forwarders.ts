import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyticsForwardersForwarderNameRoute,
  getAnalyticsForwardersForwarderNameRoute,
  getAnalyticsForwardersRoute,
  postAnalyticsForwardersRoute,
  putAnalyticsForwardersForwarderNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forwardersHandler = app
  .openapi(postAnalyticsForwardersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsForwardersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
