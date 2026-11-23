import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubAssociateCreatedArtifactHandler = app.openapi(
  postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
