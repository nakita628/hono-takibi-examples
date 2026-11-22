import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
