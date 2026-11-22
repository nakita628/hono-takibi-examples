import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceImportClientBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceImportClientBrandingHandler = app.openapi(
  postXAmzTargetWorkspacesServiceImportClientBrandingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
