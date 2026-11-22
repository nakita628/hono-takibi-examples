import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateMaintenanceWindowTargetHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
