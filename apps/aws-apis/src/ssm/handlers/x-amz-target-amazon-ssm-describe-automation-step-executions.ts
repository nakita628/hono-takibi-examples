import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAutomationStepExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeAutomationStepExecutionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAutomationStepExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
