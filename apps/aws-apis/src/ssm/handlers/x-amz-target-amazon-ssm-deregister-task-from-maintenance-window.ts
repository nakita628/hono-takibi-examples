import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeregisterTaskFromMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
