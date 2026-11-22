import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
