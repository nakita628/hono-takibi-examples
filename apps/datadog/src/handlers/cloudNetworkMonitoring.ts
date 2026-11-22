import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2NetworkConnectionsAggregateRoute,
  getApiV2NetworkDnsAggregateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudNetworkMonitoringHandler = app
  .openapi(getApiV2NetworkConnectionsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NetworkDnsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
