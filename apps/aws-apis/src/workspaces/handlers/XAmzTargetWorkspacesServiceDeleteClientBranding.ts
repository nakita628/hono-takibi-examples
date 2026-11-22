import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteClientBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDeleteClientBrandingHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteClientBrandingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
