import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
