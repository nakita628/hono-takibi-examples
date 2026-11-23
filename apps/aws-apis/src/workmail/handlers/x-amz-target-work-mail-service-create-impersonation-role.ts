import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateImpersonationRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateImpersonationRoleHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateImpersonationRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
