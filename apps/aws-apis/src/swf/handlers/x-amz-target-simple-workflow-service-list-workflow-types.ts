import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListWorkflowTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListWorkflowTypesHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListWorkflowTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
