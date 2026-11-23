import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsMigrationHubMultiAccountServiceCreateHomeRegionControlHandler,
  xAmzTargetAwsMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler,
  xAmzTargetAwsMigrationHubMultiAccountServiceGetHomeRegionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsMigrationHubMultiAccountServiceCreateHomeRegionControlHandler)
  .route('/', xAmzTargetAwsMigrationHubMultiAccountServiceDescribeHomeRegionControlsHandler)
  .route('/', xAmzTargetAwsMigrationHubMultiAccountServiceGetHomeRegionHandler)

export default app
