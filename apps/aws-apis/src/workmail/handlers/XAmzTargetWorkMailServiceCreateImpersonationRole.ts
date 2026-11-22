import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
