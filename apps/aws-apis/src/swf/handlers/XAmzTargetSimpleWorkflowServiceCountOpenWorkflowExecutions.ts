import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
