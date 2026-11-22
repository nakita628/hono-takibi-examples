import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateMaintenanceWindowTaskHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
