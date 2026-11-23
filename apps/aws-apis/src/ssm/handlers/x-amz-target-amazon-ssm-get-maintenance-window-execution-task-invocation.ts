import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskInvocationHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
