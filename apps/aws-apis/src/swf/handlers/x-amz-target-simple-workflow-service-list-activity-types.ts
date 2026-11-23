import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListActivityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListActivityTypesHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListActivityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
