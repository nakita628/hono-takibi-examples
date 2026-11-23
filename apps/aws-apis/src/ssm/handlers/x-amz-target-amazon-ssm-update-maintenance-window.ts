import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
