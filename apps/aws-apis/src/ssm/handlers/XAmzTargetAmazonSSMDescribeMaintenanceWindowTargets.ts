import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
