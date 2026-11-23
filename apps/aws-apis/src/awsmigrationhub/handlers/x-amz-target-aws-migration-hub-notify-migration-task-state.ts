import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubNotifyMigrationTaskStateHandler = app.openapi(
  postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
