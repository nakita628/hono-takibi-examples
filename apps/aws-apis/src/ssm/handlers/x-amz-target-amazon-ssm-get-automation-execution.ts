import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMGetAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
