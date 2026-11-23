import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
