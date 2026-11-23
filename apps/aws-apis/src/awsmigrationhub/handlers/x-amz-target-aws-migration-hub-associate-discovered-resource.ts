import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubAssociateDiscoveredResourceHandler = app.openapi(
  postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
