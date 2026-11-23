import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmRegisterTargetWithMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
