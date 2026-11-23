import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServicePollForActivityTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServicePollForActivityTaskHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServicePollForActivityTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
