import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartAutomationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmStartAutomationExecutionHandler = app.openapi(
  postXAmzTargetAmazonSSMStartAutomationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
