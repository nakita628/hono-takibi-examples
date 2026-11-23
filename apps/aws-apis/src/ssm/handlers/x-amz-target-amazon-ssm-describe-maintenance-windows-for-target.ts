import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeMaintenanceWindowsForTargetHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
