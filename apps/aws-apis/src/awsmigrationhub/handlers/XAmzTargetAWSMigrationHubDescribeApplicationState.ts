import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubDescribeApplicationStateHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
