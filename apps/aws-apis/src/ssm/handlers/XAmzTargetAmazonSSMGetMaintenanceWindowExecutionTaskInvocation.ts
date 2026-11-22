import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
