import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
