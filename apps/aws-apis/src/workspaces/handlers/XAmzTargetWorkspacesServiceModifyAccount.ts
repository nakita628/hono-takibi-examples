import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyAccountHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
