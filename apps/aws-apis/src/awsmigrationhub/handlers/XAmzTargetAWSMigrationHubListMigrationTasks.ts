import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListMigrationTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubListMigrationTasksHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListMigrationTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
