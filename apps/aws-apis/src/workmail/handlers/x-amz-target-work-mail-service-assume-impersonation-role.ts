import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceAssumeImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceAssumeImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceAssumeImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
