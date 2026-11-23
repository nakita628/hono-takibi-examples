import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStopAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmStopAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStopAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
