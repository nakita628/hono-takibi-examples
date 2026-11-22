import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
