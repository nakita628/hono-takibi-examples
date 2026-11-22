import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationHandler = app.openapi(
  postXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
