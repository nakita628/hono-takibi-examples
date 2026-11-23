import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubCreateProgressUpdateStreamHandler = app.openapi(
  postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
