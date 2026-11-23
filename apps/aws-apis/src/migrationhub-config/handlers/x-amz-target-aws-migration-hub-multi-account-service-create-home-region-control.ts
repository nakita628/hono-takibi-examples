import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubMultiAccountServiceCreateHomeRegionControlHandler =
  app.openapi(postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute, (c) => {
    throw new Error('Not implemented')
  })
