import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
