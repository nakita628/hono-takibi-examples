import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubDisassociateCreatedArtifactHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
