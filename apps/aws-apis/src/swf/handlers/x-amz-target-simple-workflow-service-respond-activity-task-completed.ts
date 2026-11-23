import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
