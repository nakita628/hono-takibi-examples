import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiClientEdgeLicensingHeartbeatRoute,
  postApiClientMetricsBulkRoute,
  postApiClientMetricsEdgeRoute,
  postEdgeIssueTokenRoute,
  postEdgeValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unleashEdgeHandler = app
  .openapi(postApiClientMetricsEdgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientEdgeLicensingHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientMetricsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeIssueTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
