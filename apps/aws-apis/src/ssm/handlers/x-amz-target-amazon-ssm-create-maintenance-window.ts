import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateMaintenanceWindowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateMaintenanceWindowHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateMaintenanceWindowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
