import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListApplicationStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubListApplicationStatesHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListApplicationStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
