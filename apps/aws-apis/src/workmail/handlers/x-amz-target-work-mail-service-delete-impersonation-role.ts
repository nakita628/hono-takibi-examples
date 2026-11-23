import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
