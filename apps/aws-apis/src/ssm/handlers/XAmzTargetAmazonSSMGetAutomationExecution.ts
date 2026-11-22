import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMGetAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
