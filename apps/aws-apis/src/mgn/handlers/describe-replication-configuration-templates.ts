import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeReplicationConfigurationTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const describeReplicationConfigurationTemplatesHandler = app.openapi(
  postDescribeReplicationConfigurationTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
