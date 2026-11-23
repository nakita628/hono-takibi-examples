import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDisassociateCustomDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDisassociateCustomDomainHandler = app.openapi(
  postXAmzTargetAppRunnerDisassociateCustomDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
