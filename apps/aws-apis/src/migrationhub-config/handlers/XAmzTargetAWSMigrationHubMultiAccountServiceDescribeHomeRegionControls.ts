import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler =
  app.openapi(
    postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
