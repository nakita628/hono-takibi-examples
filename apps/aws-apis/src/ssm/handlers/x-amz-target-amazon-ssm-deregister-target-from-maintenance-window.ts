import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeregisterTargetFromMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
