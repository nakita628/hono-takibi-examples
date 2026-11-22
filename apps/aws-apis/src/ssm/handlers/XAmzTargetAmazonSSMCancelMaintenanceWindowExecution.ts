import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCancelMaintenanceWindowExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
