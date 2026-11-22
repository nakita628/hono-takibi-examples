import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
