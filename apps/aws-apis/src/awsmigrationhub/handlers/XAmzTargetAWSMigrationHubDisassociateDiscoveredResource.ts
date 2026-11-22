import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubDisassociateDiscoveredResourceHandler = app.openapi(
  postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
