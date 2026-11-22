import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowTasksHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
