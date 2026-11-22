import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
