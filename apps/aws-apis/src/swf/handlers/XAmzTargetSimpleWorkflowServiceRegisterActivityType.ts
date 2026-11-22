import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRegisterActivityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRegisterActivityTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRegisterActivityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
