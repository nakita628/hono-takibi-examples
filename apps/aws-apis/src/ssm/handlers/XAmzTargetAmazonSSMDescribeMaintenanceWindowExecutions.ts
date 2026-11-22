import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
