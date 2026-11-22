import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubDisassociateCreatedArtifactHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
