import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
