import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAuditStreamConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAuditStreamConfigurationHandler = app.openapi(
  postDescribeAuditStreamConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
