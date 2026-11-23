import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
