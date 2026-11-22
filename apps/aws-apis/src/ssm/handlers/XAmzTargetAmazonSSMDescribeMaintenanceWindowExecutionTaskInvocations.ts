import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsHandler =
  app.openapi(
    postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
