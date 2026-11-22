import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
