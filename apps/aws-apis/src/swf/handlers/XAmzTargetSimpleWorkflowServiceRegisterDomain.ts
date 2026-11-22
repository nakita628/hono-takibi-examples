import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRegisterDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRegisterDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRegisterDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
