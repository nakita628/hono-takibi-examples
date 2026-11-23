import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubNotifyApplicationStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubNotifyApplicationStateHandler = app.openapi(
  postXAmzTargetAWSMigrationHubNotifyApplicationStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
