import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
