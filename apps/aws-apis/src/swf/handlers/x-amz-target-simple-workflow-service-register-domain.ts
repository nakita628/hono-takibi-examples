import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRegisterDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRegisterDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRegisterDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
