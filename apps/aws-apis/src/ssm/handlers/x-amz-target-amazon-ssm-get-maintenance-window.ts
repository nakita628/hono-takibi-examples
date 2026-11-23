import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
