import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTasksHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
