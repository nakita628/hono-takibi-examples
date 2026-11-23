import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAutomationExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeAutomationExecutionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAutomationExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
