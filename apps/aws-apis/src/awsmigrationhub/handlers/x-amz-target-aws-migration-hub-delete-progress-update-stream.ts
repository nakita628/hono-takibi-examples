import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubDeleteProgressUpdateStreamHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
