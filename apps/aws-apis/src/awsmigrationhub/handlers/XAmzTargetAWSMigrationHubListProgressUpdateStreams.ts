import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubListProgressUpdateStreamsHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
