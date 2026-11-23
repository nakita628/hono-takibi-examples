import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubDescribeApplicationStateHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
