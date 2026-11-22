import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
