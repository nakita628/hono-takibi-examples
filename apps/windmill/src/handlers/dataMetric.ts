import { OpenAPIHono } from '@hono/zod-openapi'
import { getWWorkspaceDataMetricsListRoute } from '../routes'

const app = new OpenAPIHono()

export const dataMetricHandler = app.openapi(getWWorkspaceDataMetricsListRoute, (c) => {
  throw new Error('Not implemented')
})
