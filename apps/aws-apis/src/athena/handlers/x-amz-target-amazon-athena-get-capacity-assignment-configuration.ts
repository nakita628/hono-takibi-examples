import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
