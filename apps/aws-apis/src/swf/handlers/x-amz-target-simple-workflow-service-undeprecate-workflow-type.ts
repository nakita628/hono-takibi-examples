import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
