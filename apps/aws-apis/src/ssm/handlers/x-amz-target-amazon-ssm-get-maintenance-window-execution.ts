import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetMaintenanceWindowExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
