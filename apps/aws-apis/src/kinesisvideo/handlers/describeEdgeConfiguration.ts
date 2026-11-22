import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeEdgeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeEdgeConfigurationHandler = app.openapi(
  postDescribeEdgeConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
