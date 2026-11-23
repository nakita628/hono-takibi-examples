import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
