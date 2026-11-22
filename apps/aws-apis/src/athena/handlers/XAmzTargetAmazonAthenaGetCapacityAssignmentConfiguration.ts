import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationRoute,
  (c) => {},
)
