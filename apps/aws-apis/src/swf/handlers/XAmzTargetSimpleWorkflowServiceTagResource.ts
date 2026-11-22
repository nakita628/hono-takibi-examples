import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceTagResourceHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
