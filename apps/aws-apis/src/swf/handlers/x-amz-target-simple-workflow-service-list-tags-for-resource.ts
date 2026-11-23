import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
