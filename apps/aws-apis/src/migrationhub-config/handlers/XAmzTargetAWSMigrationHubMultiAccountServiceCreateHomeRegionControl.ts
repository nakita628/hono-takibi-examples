import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlHandler =
  app.openapi(postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute, (c) => {
    throw new Error('Not implemented')
  })
