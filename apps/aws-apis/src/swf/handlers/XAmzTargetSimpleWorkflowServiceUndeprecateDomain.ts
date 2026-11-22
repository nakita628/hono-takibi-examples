import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUndeprecateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUndeprecateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
