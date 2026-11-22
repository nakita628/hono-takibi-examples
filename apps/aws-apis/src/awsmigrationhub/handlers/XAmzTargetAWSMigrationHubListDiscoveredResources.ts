import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubListDiscoveredResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubListDiscoveredResourcesHandler = app.openapi(
  postXAmzTargetAWSMigrationHubListDiscoveredResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
