import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
