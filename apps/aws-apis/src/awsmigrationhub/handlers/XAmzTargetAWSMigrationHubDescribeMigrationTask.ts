import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubDescribeMigrationTaskHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
