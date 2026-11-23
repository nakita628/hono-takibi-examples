import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsMigrationHubMultiAccountServiceGetHomeRegionHandler = app.openapi(
  postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
