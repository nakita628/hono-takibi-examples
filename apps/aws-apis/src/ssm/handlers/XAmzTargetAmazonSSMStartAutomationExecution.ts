import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMStartAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStartAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
