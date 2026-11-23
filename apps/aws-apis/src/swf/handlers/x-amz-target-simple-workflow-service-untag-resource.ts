import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceUntagResourceHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
