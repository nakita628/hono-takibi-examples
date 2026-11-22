import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlHandler,
  XAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler,
  XAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControlHandler)
  .route('/', XAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler)
  .route('/', XAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegionHandler)

export default app
