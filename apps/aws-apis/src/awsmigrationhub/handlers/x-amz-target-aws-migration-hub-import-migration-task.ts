import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubImportMigrationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubImportMigrationTaskHandler = app.openapi(
  postXAmzTargetAWSMigrationHubImportMigrationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
