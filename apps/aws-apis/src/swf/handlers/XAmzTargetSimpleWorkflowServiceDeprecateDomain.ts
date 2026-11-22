import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDeprecateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDeprecateDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDeprecateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
