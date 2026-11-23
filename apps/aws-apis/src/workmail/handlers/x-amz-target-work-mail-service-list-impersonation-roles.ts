import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListImpersonationRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListImpersonationRolesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListImpersonationRolesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
