import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
