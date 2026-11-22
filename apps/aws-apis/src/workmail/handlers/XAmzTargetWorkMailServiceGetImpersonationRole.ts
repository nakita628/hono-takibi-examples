import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceGetImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
