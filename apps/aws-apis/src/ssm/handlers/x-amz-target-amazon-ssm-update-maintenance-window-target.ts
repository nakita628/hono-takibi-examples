import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateMaintenanceWindowTargetHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
