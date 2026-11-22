import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceJobMetricsGetProgressIdRoute,
  postWWorkspaceJobMetricsGetIdRoute,
  postWWorkspaceJobMetricsSetProgressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(postWWorkspaceJobMetricsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobMetricsSetProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobMetricsGetProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
