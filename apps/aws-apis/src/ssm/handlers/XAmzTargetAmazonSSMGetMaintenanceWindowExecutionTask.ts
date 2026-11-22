import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
