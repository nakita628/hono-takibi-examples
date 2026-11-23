import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmRegisterTaskWithMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
