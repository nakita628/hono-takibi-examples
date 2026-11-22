import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
