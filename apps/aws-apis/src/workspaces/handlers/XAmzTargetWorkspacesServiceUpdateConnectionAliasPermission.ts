import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
