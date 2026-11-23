import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdateImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
