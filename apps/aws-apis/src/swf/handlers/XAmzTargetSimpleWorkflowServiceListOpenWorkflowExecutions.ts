import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
