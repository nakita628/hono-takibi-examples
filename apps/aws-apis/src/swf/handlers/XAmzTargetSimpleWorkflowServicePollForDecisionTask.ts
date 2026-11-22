import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServicePollForDecisionTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServicePollForDecisionTaskHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServicePollForDecisionTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
