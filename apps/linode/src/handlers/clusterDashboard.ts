import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLkeClustersClusterIdDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const clusterDashboardHandler = app.openapi(
  getApiVersionLkeClustersClusterIdDashboardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
