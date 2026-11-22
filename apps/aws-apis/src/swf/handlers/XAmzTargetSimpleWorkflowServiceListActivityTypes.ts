import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListActivityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceListActivityTypesHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListActivityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
