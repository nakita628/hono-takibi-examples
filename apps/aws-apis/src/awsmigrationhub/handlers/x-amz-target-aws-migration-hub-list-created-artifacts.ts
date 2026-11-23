import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListCreatedArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubListCreatedArtifactsHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListCreatedArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
