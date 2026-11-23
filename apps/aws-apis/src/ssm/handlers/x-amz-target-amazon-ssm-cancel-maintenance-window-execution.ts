import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCancelMaintenanceWindowExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
