import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeMaintenanceWindowScheduleHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
