import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
