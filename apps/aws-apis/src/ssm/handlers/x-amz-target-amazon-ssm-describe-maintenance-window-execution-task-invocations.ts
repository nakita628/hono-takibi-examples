import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTaskInvocationsHandler =
  app.openapi(
    postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
