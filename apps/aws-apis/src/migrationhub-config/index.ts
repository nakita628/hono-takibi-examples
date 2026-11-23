import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute,
  postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute,
  postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRoute,
} from './routes'
import {
  postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRouteHandler,
  postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRouteHandler,
  postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRoute,
    postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRoute,
    postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRoute,
    postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionRouteHandler,
  )

export default app
