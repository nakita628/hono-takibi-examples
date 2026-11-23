import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateMaintenanceWindowTaskHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
