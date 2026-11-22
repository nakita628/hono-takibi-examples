import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
