import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifySelfservicePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifySelfservicePermissionsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifySelfservicePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
