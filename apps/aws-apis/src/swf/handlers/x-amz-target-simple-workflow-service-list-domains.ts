import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListDomainsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
