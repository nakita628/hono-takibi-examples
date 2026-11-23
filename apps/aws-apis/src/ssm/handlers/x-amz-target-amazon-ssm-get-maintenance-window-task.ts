import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetMaintenanceWindowTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetMaintenanceWindowTaskHandler = app.openapi(
  postXAmzTargetAmazonSSMGetMaintenanceWindowTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
