import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerAssociateCustomDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerAssociateCustomDomainHandler = app.openapi(
  postXAmzTargetAppRunnerAssociateCustomDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
