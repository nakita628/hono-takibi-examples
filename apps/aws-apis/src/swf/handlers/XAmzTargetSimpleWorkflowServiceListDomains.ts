import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceListDomainsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
