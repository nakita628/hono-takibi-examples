import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler =
  app.openapi(
    postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
