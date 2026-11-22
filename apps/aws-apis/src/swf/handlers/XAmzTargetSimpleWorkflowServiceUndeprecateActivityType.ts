import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
