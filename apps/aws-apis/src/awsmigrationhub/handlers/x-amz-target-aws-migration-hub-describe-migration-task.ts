import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubDescribeMigrationTaskHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
