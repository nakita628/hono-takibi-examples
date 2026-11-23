import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMSendAutomationSignalRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmSendAutomationSignalHandler = app.openapi(
  postXAmzTargetAmazonSSMSendAutomationSignalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
