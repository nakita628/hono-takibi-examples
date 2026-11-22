import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMSendAutomationSignalRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMSendAutomationSignalHandler = app.openapi(
  postXAmzTargetAmazonSSMSendAutomationSignalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
