import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
