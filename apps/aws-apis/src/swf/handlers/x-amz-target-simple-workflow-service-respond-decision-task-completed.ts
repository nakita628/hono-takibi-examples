import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
