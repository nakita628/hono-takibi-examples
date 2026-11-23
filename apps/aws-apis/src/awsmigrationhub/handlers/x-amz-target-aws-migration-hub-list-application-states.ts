import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListApplicationStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubListApplicationStatesHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListApplicationStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
