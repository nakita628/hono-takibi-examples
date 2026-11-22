import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubCreateProgressUpdateStreamHandler = app.openapi(
  postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
