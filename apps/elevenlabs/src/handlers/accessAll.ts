import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRoute,
  postV1WorkspaceAnalyticsRequestsRoute,
  postV1WorkspaceAnalyticsUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessAllHandler = app
  .openapi(postV1WorkspaceAnalyticsQueryUsageByProductOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAnalyticsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAnalyticsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
