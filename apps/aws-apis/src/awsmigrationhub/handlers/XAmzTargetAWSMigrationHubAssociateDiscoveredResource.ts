import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubAssociateDiscoveredResourceHandler = app.openapi(
  postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
