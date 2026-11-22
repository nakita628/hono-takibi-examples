import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStopAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMStopAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStopAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
