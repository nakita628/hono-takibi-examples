import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerAssociateCustomDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerAssociateCustomDomainHandler = app.openapi(
  postXAmzTargetAppRunnerAssociateCustomDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
