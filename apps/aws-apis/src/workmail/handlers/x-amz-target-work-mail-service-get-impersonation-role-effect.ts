import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetImpersonationRoleEffectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetImpersonationRoleEffectHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetImpersonationRoleEffectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
