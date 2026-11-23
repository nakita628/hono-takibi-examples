import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUndeprecateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUndeprecateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
