import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDescribeDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDescribeDomainHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDescribeDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
